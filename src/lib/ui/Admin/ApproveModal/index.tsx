import { useQuery, useQueryClient } from '@tanstack/react-query'
import './style.scss'
import { getArticleQueryOptions } from '../../../query/articles.queryOptions'
import Button from '../../Button'
import { useState } from 'react'
import { _AdminCreateVerification, _SetArticleStatus } from '../../../utils/pb'

function ApproveModal(props:any){
    const {id} = props
    const queryClient = useQueryClient()
    const {data:article} = useQuery(getArticleQueryOptions(id))
    const [message, setMessage] = useState('')

    const handleStatusAction = async (status:string) => {
        await _SetArticleStatus(id,status)
        const res = await _AdminCreateVerification(message,status,id)
        
        if(res){
            setMessage('')
            document.querySelector('.approvemodal')?.classList.toggle('close')
            queryClient.invalidateQueries({queryKey: ['admin_all_articles']})
        }
    }

    return (
        <div className="approvemodal close">
            <div className="modal-close">
                <Button size="md" variant="ghost" action={() => document.querySelector('.approvemodal')?.classList.toggle('close')} ><i className='bx  bx-x-square'></i></Button>
            </div>
            <div className='approvemodal-wrapper'>
                <div className="approvemodal-article">
                    <div className="article">
                        <span className="tag">{article?.expand.tags.name}</span>
                        <h1 className="title">{article?.title}</h1>
                        <div className="article_img">
                            <img src={article?.cover} alt="" />
                        </div>
                        <article dangerouslySetInnerHTML={{__html: article?.content}}></article>
                    </div>
                </div>
                <div className="approvemodal-actions">
                    <textarea placeholder='Provide reason if rejected...' name="message" value={message} onChange={(e) => setMessage(e.target.value)} id=""></textarea>
                    <div className="btns">
                        <Button size="md" variant="outline" action={() => handleStatusAction('approved')} >Set Approved</Button>
                        <Button size="md" variant="outline" action={() => handleStatusAction('rejected')} >Set Rejected</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ApproveModal