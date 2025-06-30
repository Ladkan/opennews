import { Link } from "react-router-dom"
import { useTagsContext } from "../../context/TagsContext"
import { formatTimeAgo } from "../../utils"
import './style.scss'
import { useEffect, useState } from "react"
import { _getUserName } from "../../utils/pb"

function Card(props:any){
    const {data} = useTagsContext()
    const [name, setName] = useState()
    const {title, cover, tags, published, id, author, page} = props

    const handleGetName = async () => {
        const res = await _getUserName(author)
        setName(res.name)
    }

    useEffect(() => {
        if(page){
            handleGetName
        }
    },[])

    const tag = data.find(i => i.id === tags)

    return(
        <Link to={"/article/"+id} className="card" >
            <div className="card_img">
                <img src={cover} alt={title} />
            </div>
            <div className="card_content">
                <span>{tag.name}</span>
                <h3>{title}</h3>
                <p className="bottom" >{page ? name : author} {formatTimeAgo(published)}</p>
            </div>
        </Link>
    )
}

export default Card