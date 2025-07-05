import { queryOptions } from "@tanstack/react-query";
import { _AdminGetAllVerefications } from "../utils/pb";

//Admin get all verifications
export function Admin_getAllVerifications(){
    return queryOptions({
        queryKey: ['admin_verifications'],
        queryFn: () => _AdminGetAllVerefications(),
        staleTime: 6000,
        placeholderData: (prev) => prev
    })
}