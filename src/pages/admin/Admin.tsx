import { useQuery } from "@tanstack/react-query"
import { getTagsStatusQueryOptions } from "../../lib/query/tag.queryOptions"

function Admin(){
            const {data:stats} = useQuery(getTagsStatusQueryOptions())
    return (
        <section>
            <div className="container">
                <h1>Admin panel</h1>
            </div>
        </section>
    )
}

export default Admin