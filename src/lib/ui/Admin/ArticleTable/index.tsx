import { Link } from "react-router-dom"
import { FirstToUpper } from "../../../utils"
import Button from "../../Button"
import './style.scss'
import { _SetArticleStatus } from "../../../utils/pb"
import { useQueryClient } from "@tanstack/react-query"

function ArticleTable(props:any){
    const {data,approveAction} = props
    const queryClient = useQueryClient()
    const handleSetAction = async (id:string, set:string) => {
        const res = await _SetArticleStatus(id,set)
        if(res)
            queryClient.invalidateQueries({queryKey: ['admin_all_articles']})
    }

    const handleApproveAction = (id:string) => {
        approveAction(id)
        document.querySelector('.approvemodal')?.classList.toggle('close')
    }

    return(
            <table className="table-admin">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Tag</th>
                        <th>Status</th>
                        <th>Published</th>
                        <th>Created</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.map && data?.map((article:any) => (
                    <tr key={article.id}>
                        <td><Link to={"/article/"+article.id} >{article.title}</Link></td>
                        <td>{article?.expand.author.name}</td>
                        <td><span>{article.expand.tags.name}</span></td>
                        <td>{FirstToUpper(article.status)}</td>
                        <td>{new Date(article?.published).toLocaleDateString("en-US", {
                            year: 'numeric',
                            month: 'numeric',
                            day: 'numeric'
                        })}</td>
                        <td>{new Date(article?.created).toLocaleDateString("en-US", {
                            year: 'numeric',
                            month: 'numeric',
                            day: 'numeric'
                        })}</td>
                        <td style={{display:"flex", gap:".25rem"}} >
                            {article.status != 'hidden' ? <Button size="sm" variant="outline" action={() => handleSetAction(article.id,'hidden')} >Hide</Button> : null}
                            {article.status === 'pending' ? <Button size="sm" variant="outline" action={() => handleApproveAction(article.id)} >Approve</Button> : null}
                            <Button size="sm" variant="danger" action={() => handleDeleteCard(article.id)} >Delete</Button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
    )
}

export default ArticleTable