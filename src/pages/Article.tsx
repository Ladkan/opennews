import { useParams } from "react-router-dom"
import { useQuery, useQueryClient } from "@tanstack/react-query"
import { getArticleQueryOptions } from "../lib/query/articles.queryOptions"
import { getArticleCommentsQueryOptions } from "../lib/query/comments.queryOptions"
import '../lib/scss/article.scss'
import { _CreateComment } from "../lib/utils/pb"
import Button from "../lib/ui/Button"
import { useState } from "react"
import Comment from '../lib/ui/Comment'

function Article(){
    const {id} = useParams()
    const queryClient = useQueryClient()
    const {data:article} = useQuery(getArticleQueryOptions(id))
    const {data:comments} = useQuery(getArticleCommentsQueryOptions(id))

    const [message, setMessage] = useState('')

    const handleSendComment = async () =>{
        const res = await _CreateComment(message, article?.id);
        setMessage('')
        if(res)
            queryClient.invalidateQueries({queryKey: ['comments_'+article?.id]})
    }

    return (
        <div className="container">
            <div className="article">
                <span className="tag">{article?.expand.tags.name}</span>
                <h1 className="title">{article?.title}</h1>
                <span className="date" ><i className='bx  bx-calendar'  ></i>  {new Date(article?.published).toLocaleDateString("en-US", {
                            weekday: 'long',
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        })}</span>
                <div className="article_author">
                    <div className="avatar">
                        { article?.expand.author.avatar ? (
                            <img 
                            src={"http://127.0.0.1:8090/api/files/"+article?.expand.author.collectionId+"/"+article?.expand.author.id+"/"+article?.expand.author.avatar} 
                            alt={article?.expand.author.name} />
                        ) : (
                            <img src="https://placehold.co/100x100" alt="" />
                        )}
                    </div>
                    <div className="article_author_text">
                        <div className="name">
                            <p>{article?.expand.author.name}</p>
                            <span> • Author</span>
                        </div>
                        <div className="aboutme">
                            {article?.expand.author.aboutme}
                        </div>
                    </div>
                </div>
                <div className="article_img">
                    <img src={article?.cover} alt="" />
                </div>
                <article dangerouslySetInnerHTML={{__html: article?.content}}></article>
            </div>
            <div className="comments">
                <h3>Comments ({comments?.length})</h3>
                <div className="leave_comment">
                    <h3>Leave a comment</h3>
                    <textarea name="comment" id="" value={message} onChange={(e) => setMessage(e.target.value)} ></textarea>
                    <Button size="md" variant="outline" action={handleSendComment} >Post comment</Button>
                </div>
                <div className="comments_wrapper">
                        {comments?.map((item:any) => (
                            <Comment user={item.expand.user} created={item.created} content={item.content} />
                        ))}
                </div>
            </div>
        </div>
    )
}

export default Article