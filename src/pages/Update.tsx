import { useRef, useState } from "react"
import BundledEditor from "../lib/components/BundleEditor"
import InputGroup from "../lib/ui/InputGroup"
import '../lib/scss/create.scss'
import Button from "../lib/ui/Button"
import { _CreateArticle, _UpdateArticle, pb } from "../lib/utils/pb"
import { useNavigate, useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import { getArticleQueryOptions } from "../lib/query/articles.queryOptions"
import { getTagsQueryOptions } from "../lib/query/tag.queryOptions"

function Update(){
    const {id} = useParams()
    const {data} = useQuery(getTagsQueryOptions())
    const editorRef = useRef(null)
    const {data:article} = useQuery(getArticleQueryOptions(id))
    const [title, setTitle] = useState(article?.title)
    const [cover, setCover] = useState(article?.cover)
    const [tag, setTag] = useState(article?.tags)
    let nav = useNavigate()

    if(article?.author != pb.authStore.model?.id)
        nav("/")

    const handleSubmit = async (status:string) => {
        if(editorRef.current){
            const res = await _UpdateArticle(article.id,title,cover,status,tag,editorRef.current.getContent())
            nav("/update/"+res.id)
        }
    }

    return(
        <div className="container">
            <section className="article-create">
                <InputGroup name="title" type="text" value={article?.title} handleChange={setTitle} />
                <InputGroup name="cover" type="text" value={article?.cover} handleChange={setCover} placeholder="https://postimg.cc/" />
                <InputGroup name="tag" type="select" value={article?.tags} handleChange={setTag} options={data}/>
                <BundledEditor 
                onInit={(_evt, editor) => editorRef.current = editor}
                initialValue={article?.content}
                init={{
                    plugins: [
                        'image','table','lists','link','autolink','advlist','wordcount'
                    ]
                }}
                />
                <div className="buttons">
                    {article?.status === "pending" || article?.status === "published" ? (
                        <>
                        <Button size="md" variant="outline" action={() => handleSubmit('pending')} >Update</Button>
                        <span>If an article is published, updating the article will require new approval.</span>
                        </>
                    ) : (
                        <>
                        <Button size="md" variant="outline" action={() => handleSubmit('draft')}>Save as draft</Button>
                        <Button size="md" variant="outline" action={() => handleSubmit('pending')} >Send for approval</Button>
                        </>
                    )}
                </div>
            </section>
        </div>
    )
}

export default Update