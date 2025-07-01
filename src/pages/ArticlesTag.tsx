import Card from "../lib/ui/Card"
import '../lib/scss/articles.scss'
import { useParams } from "react-router-dom"
import { useTagsContext } from "../lib/context/TagsContext"
import { useQuery, useQueryClient } from "@tanstack/react-query"
import { getPublishedArticlesByTagQueryOptions } from "../lib/query/articles.queryOptions"
import { useEffect } from "react"

function ArticlesTag(){
    const queryClient = useQueryClient()
    useEffect(() => {
        queryClient.invalidateQueries({queryKey: ['articles_published_tag']})
    })

    const {id} = useParams()
    const {data} = useTagsContext()
    const tag = data.find(i => i.name === id)
    const {data:all} = useQuery(getPublishedArticlesByTagQueryOptions(tag.id))

    return(
        <section className="articles">
            <div className="container">
                <div className="text">
                    <h2>All Articles</h2>
                    <p>Discover our complete collection of news articles and in-depth stories</p>
                </div>
                <div className="articles_cards">
                    {all?.map((article:any) => (
                        <Card page={true} key={article.id} author={article.author} title={article.title} cover={article.cover} tags={article.tags} published={article.published} id={article.id} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ArticlesTag