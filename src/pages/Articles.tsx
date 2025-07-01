import Card from "../lib/ui/Card"
import '../lib/scss/articles.scss'
import { useQuery } from "@tanstack/react-query"
import { getPublishedArticlesQueryOptions } from "../lib/query/articles.queryOptions"

function Articles(){
    const {data:all} = useQuery(getPublishedArticlesQueryOptions())
 
    return(
        <section className="articles">
            <div className="container">
                <div className="text">
                    <h2>All Articles</h2>
                    <p>Discover our complete collection of news articles and in-depth stories</p>
                </div>
                <div className="articles_cards">
                    {all?.map((article:any) => (
                        <Card page={true} key={article.id} data={article} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Articles