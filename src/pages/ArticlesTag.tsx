import Card from "../lib/ui/Card"
import '../lib/scss/articles.scss'
import { useParams } from "react-router-dom"
import { useQuery, useQueryClient } from "@tanstack/react-query"
import { getPublishedArticlesByTagQueryOptions } from "../lib/query/articles.queryOptions"
import { useEffect } from "react"
import { getTagsQueryOptions } from "../lib/query/tag.queryOptions"

function ArticlesTag(){
    const queryClient = useQueryClient()
    const {id} = useParams()
    useEffect(() => {
        queryClient.invalidateQueries({queryKey: ['articles_published_tag']})
    })

    const {data} = useQuery(getTagsQueryOptions())
    console.log(data)
    const tag = data?.find((i) => i.name === id)
    console.log(tag)
    const {data:all} = useQuery(getPublishedArticlesByTagQueryOptions(tag?.id))

    return(
        <section className="articles">
            <div className="container">
                <div className="text">
                    <h2>All Articles</h2>
                    <p>Discover our complete collection of news articles and in-depth stories</p>
                </div>
                <div className="articles_cards">
                    {all?.map((article:any) => (
                        <Card key={article.id} page={true} data={article} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ArticlesTag