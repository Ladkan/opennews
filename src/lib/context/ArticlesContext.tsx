import { useQuery } from "@tanstack/react-query";
import { createContext, useContext } from "react";
import { getLatestPublishedQueryOptions, getPublishedArticlesQueryOptions } from "../query/articles.queryOptions";

export const PublishedContext = createContext({})
export const PublishedContextProvider = PublishedContext.Provider
export const usePublishedContext = () => useContext(PublishedContext)

export const PublishedProvider = (props:any) => {
    const {data:all} = useQuery(getPublishedArticlesQueryOptions())
    const {data:latest} = useQuery(getLatestPublishedQueryOptions())

    return(
        <PublishedContextProvider value={{all,latest}}>
            {props.children}
        </PublishedContextProvider>
    )
}