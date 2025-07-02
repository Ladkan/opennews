import { useQuery } from "@tanstack/react-query"
import { getTagsStatusQueryOptions } from "../../lib/query/tag.queryOptions"

function Admin(){
            const {data:stats} = useQuery(getTagsStatusQueryOptions())
    return (
        <>
        </>
    )
}

export default Admin