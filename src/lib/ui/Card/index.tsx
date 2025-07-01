import { Link } from "react-router-dom"
import { formatTimeAgo } from "../../utils"
import './style.scss'

function Card(props:any){
    const {data,page} = props
    return(
        <Link to={"/article/"+data.id} className="card" >
            <div className="card_img">
                <img src={data.cover} alt={data.title} />
            </div>
            <div className="card_content">
                <span>{data.expand.tags.name}</span>
                <h3>{data.title}</h3>
                <p className="bottom" >{page ? data.expand.author.name : data.author} {formatTimeAgo(data.published)}</p>
            </div>
        </Link>
    )
}

export default Card