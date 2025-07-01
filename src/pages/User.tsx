import { useQuery, useQueryClient } from '@tanstack/react-query'
import '../lib/scss/user.scss'
import { _DeleteArticle, _SetArticleStatus, pb } from '../lib/utils/pb'
import { getArticlesByUserQueryOptions } from '../lib/query/articles.queryOptions'
import Button from '../lib/ui/Button'
import { Link } from 'react-router-dom'
import { FirstToUpper } from '../lib/utils'
import { useState } from 'react'

function User(){
    const queryClient = useQueryClient()
    const avatar_url = "http://127.0.0.1:8090/api/files/"+pb.authStore.model?.collectionId+"/"+pb.authStore.model?.id+"/"+pb.authStore.model?.avatar
    const {data} = useQuery(getArticlesByUserQueryOptions(pb.authStore.record?.id))
    const delCard = document.querySelector(".delete-card")
    const [toDelete, setToDelete] = useState('')

    const handleSetAction = async (id:string, set:string) => {
        const res = await _SetArticleStatus(id,set)
        if(res)
            queryClient.invalidateQueries({queryKey: ['articles_user']})
    }

    const handleDeleteCard = (id:string) => {
        setToDelete(id)
        delCard?.classList.toggle('close')
    }

    const handleDelete = async () => {
        const res = await _DeleteArticle(toDelete)
        delCard?.classList.toggle('close')

        if(res)
            queryClient.invalidateQueries({queryKey: ['articles_user']})
    }

    return (
        <div className="container">

            <div className="delete-card close">
                <div className="delete-card-content">
                    <p>Delete article?</p>
                    <div className="btns">
                        <Button size="md" variant="danger" action={handleDelete} >Yes</Button>
                        <Button size="md" variant="outline" action={() => delCard?.classList.toggle('close')}>No</Button>
                    </div>
                </div>
            </div>

            <div className="user-card">
                <div className="avatar">
                    <img src={pb.authStore.model?.avatar ? avatar_url : "https://placehold.co/100x100"} alt="" />
                </div>
                <div className="details">
                    <h2>{pb.authStore.model.name}</h2>
                    <p>{pb.authStore.model.aboutme}</p>
                </div>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Tag</th>
                        <th>Status</th>
                        <th>Published</th>
                        <th>Created</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map((article:any) => (
                    <tr key={article.id}>
                        <td><Link to={"/article/"+article.id} >{article.title}</Link></td>
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
                            {article.status === "approved" ? <Button size="sm" variant="outline" action={() => handleSetAction(article.id,'published')} >Publish</Button> : null}
                            <Button size="sm" variant="outline" redirect={"/update/"+article.id} >Update</Button>
                            <Button size="sm" variant="danger" action={() => handleDeleteCard(article.id)} >Delete</Button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default User