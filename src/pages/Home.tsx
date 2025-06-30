import { usePublishedContext } from '../lib/context/ArticlesContext'
import { useTagsContext } from '../lib/context/TagsContext'
import '../lib/scss/home.scss'
import Button from '../lib/ui/Button'
import Card from '../lib/ui/Card'
import Stat from '../lib/ui/Stat'

function Home(){
    const {latest} = usePublishedContext()
        const {stats} = useTagsContext()
    return(
        <div className="container">
            <main className="home" >
                <section className='latest' >
                    <div className="upper">
                        <h2>Latest News</h2>
                        <Button redirect='/articles' size="md" variant="outline">View All Articles</Button>
                    </div>
                    <div className="content">
                        {latest?.map((article:any) => (
                            <Card key={article.id} author={article.author} title={article.title} cover={article.cover} tags={article.tags} published={article.published} id={article.id} />
                        ))}
                    </div>
                </section>
                <section className='tags_stats'>
                        <h2>Explore by Category</h2>
                        <div className="stats">
                            {stats?.map((stats:any) => (
                                <Stat key={stats.id} name={stats.name} count={stats.count} />
                            ))}
                        </div>
                </section>
            </main>
        </div>
    )
}

export default Home