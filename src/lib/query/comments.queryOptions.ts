import { queryOptions } from "@tanstack/react-query";
import { _GetArticleComments } from "../utils/pb";

export function getArticleCommentsQueryOptions(id:string){
    return queryOptions({
        queryKey:["comments_"+id],
        queryFn: () => _GetArticleComments(id),
        staleTime: 6000,
        placeholderData: (prev) => prev,
    })
}