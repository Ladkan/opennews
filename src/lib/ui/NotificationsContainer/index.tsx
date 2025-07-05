import { formatTimeAgo } from "../../utils"
import { _updateNotifications } from "../../utils/pb"
import './style.scss'
const renderIcon = (type:string) => {
    switch(type){
        case 'USER':
            return (
                <>
                <div className="icon USER">
                    <i className='bx  bx-user-circle'></i> 
                </div>
                </>
            )
        case 'SYSTEM':
            return (
                <>
                 <div className="icon SYSTEM">
                    <i className='bx  bx-gear'></i> 
                </div>
                </>
            )
        case 'ACTION':
            return (
                <>
                 <div className="icon ACTION">
                    <i className='bx  bx-light-bulb'></i> 
                </div>
                </>
            )
    }
}

function NotificationsContainer(props:any){

    return(
        <div className='notif-container'>
                <div className="notif-scroll">
                    {props.data.map((item:any) => (
                        <Notification id={item.id} isRead={item.isRead} title={item.title} message={item.message} type={item.type} created={item.created} />
                    ))}
                </div>
        </div>
    )
}

function Notification(props:any){
    const { isRead, title, message, created, id, type } = props
    return(
        <>
        <div onClick={async () => await _updateNotifications(id)} key={id} className={'notif-item ' + (isRead ? '' : 'new')} >
            {renderIcon(type)}
            <div className="content">
                <h4>{title}</h4>
                <p>{message}</p>
            </div>
            <div className="time">
                {formatTimeAgo(created)}
            </div>
        </div>
        <hr />
        </>
    )
}

export default NotificationsContainer