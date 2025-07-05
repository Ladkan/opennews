import VerificationsTable from "../../lib/ui/Admin/ArticleTable/verifications"
import '../../lib/scss/verifications.scss'
import { useQuery } from "@tanstack/react-query"
import { Admin_getAllVerifications } from "../../lib/query/verifications.queryOptions"

function Admin_Verifications(){
    const {data} = useQuery(Admin_getAllVerifications())
    return(
        <div className="container">
            <section className="verifications">
                <VerificationsTable data={data} />
            </section>
        </div>
    )
}

export default Admin_Verifications