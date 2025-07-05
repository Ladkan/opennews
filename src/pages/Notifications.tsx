import { useQuery } from '@tanstack/react-query'
import '../lib/scss/notifications.scss'
import NotificationsContainer from '../lib/ui/NotificationsContainer'
import { getAllNotifications } from '../lib/query/notifications.queryOprions'
import { pb } from '../lib/utils/pb'

function Notifications(){

    const {data:notifications} = useQuery(getAllNotifications(pb.authStore.model?.id))

    return(
        <section className="notifications">
            <div className="container max-w-4xl">
                <div className="header">
                    <h1>Notifications</h1>
                    <p>Stay updated with your activities</p>
                </div>
                <NotificationsContainer data={notifications} />
            </div>
        </section>
    )
}
export default Notifications