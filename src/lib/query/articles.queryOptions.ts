import { queryOptions } from "@tanstack/react-query";
import { _GetArticle, _getLatest, _getPublished, _getPublishedByTag } from "../utils/pb";

export function getPublishedArticlesQueryOptions(){
    return queryOptions({
        queryKey:["articles_published"],
        queryFn: () => _getPublished(),
        staleTime: 6000,
        placeholderData: (prev) => prev,
    })
}

export function getPublishedArticlesByTagQueryOptions(id:string){
    return queryOptions({
        queryKey:["articles_published_tag"],
        queryFn: () => _getPublishedByTag(id),
        staleTime: 6000,
        placeholderData: (prev) => prev,
    })
}

export function getLatestPublishedQueryOptions(){
    return queryOptions({
        queryKey:["articles_latest"],
        queryFn: () => _getLatest(),
        staleTime: 6000,
        placeholderData: (prev) => prev,
    })
}

export function getArticleQueryOptions(id:string){
    return queryOptions({
        queryKey:["article_"+id],
        queryFn: () => _GetArticle(id),
        staleTime: 6000,
        placeholderData: (prev) => prev,
    })
}