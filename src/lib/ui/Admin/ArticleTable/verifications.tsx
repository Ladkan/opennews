import { Link } from "react-router-dom"
import { FirstToUpper } from "../../../utils"

function VerificationsTable(props:any){
    const {data}= props
    return(
            <table className="table-admin">
                <thead>
                    <tr>
                        <th>Article</th>
                        <th>Cheked by</th>
                        <th>Status</th>
                        <th>Comment</th>
                        <th>Created</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.map && data?.map((item:any) => (
                    <tr key={item.id}>
                        <td><Link to={"/article/"+item?.expand.article.id} >{item?.expand.article.title}</Link></td>
                        <td>{item?.expand.user.name}</td>
                        <td>{FirstToUpper(item.type)}</td>
                        <td>{item.comment}</td>
                        <td>{new Date(item?.created).toLocaleDateString("en-US", {
                            year: 'numeric',
                            month: 'numeric',
                            day: 'numeric'
                        })}</td>
                    </tr>
                ))}
                </tbody>
            </table>
    )
}

export default VerificationsTable