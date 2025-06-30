import { Link } from "react-router-dom"
import './style.scss'

function Stat(props:any){
    const {name, count} = props
    return(
        <Link to={"/articles/"+name} className="stat">
            <div className="left">
                <h3>{name}</h3>
                <p>{count} articles</p>
            </div>
        </Link>
    )
}

export default Stat