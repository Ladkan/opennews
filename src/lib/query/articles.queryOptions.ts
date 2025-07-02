import { queryOptions } from "@tanstack/react-query";
import { _AdminGetAllArticles, _GetArticle, _GetArticlesUser, _getLatest, _getPublished, _getPublishedByTag } from "../utils/pb";

//Get all published articles
export function getPublishedArticlesQueryOptions(){
    return queryOptions({
        queryKey:["articles_published"],
        queryFn: () => _getPublished(),
        staleTime: 6000,
        placeholderData: (prev) => prev,
    })
}

//Get all published articles by tag
export function getPublishedArticlesByTagQueryOptions(id:string){
    return queryOptions({
        queryKey:["articles_published_tag"],
        queryFn: () => _getPublishedByTag(id),
        staleTime: 6000,
        placeholderData: (prev) => prev,
    })
}

//Get latest published articles
export function getLatestPublishedQueryOptions(){
    return queryOptions({
        queryKey:["articles_latest"],
        queryFn: () => _getLatest(),
        staleTime: 6000,
        placeholderData: (prev) => prev,
    })
}

//Get article
export function getArticleQueryOptions(id:string){
    return queryOptions({
        queryKey:["article_"+id],
        queryFn: () => _GetArticle(id),
        staleTime: 6000,
        placeholderData: (prev) => prev,
    })
}

//Get all articles by user
export function getArticlesByUserQueryOptions(id:string){
    return queryOptions({
        queryKey:["articles_user"],
        queryFn: () => _GetArticlesUser(id),
        staleTime: 6000,
        placeholderData: (prev) => prev
    })
}

//Admin get all articles
export function Admin_getAllArticles(){
    return queryOptions({
        queryKey: ["admin_all_articles"],
        queryFn: () => _AdminGetAllArticles(),
        staleTime: 6000,
        placeholderData: (prev) => prev
    })
}
