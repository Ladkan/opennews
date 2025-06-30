import { useQuery } from "@tanstack/react-query";
import { createContext, useContext } from "react";
import { getTagsQueryOptions, getTagsStatusQueryOptions } from "../query/tag.queryOptions";

export const TagsContext = createContext({})
export const TagsContextProvider = TagsContext.Provider
export const useTagsContext = () => useContext(TagsContext)

export const TagsProvider = (props:any) => {
    const {data} = useQuery(getTagsQueryOptions())
    const {data:stats} = useQuery(getTagsStatusQueryOptions())

    return(
        <TagsContextProvider value={{data,stats}} >
            {props.children}
        </TagsContextProvider>
    )

}