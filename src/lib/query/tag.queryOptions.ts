import { queryOptions } from "@tanstack/react-query";
import { _getTagStats, _getTags } from "../utils/pb";

export function getTagsQueryOptions() {
    return queryOptions({
        queryKey:["tags"],
        queryFn: () => _getTags(),
        staleTime: 1,
        placeholderData: (prev) => prev,
    })
}

export function getTagsStatusQueryOptions() {
    return queryOptions({
        queryKey:["tags_stats"],
        queryFn: () => _getTagStats(),
        staleTime: 6000,
        placeholderData: (prev) => prev,
    })
}

