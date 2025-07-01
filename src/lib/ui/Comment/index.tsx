import { formatTimeAgo } from "../../utils"
import './style.scss'

function Comment(props:any){
    const {user, created,content} = props
    return(
        <div className="comment">
            <div className="avatar">
                {user.avatar ? (
                    <img 
                    src={"http://127.0.0.1:8090/api/files/"+user.collectionId+"/"+user.id+"/"+user.avatar} 
                    alt={user.name} />
                ) : (
                    <img src="https://placehold.co/100x100" alt="" />
                )}
            </div>
            <div className="comment_content">
                <div className="top">
                    <p className="name">{user.name}</p>
                    <span className="created">{formatTimeAgo(created)}</span>
                </div>
                <div className="message">
                    {content}
                </div>
            </div>
        </div>
    )
}

export default Comment