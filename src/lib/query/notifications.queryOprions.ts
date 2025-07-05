import { queryOptions } from "@tanstack/react-query";
import { _GetAllUserNotifications, _GetUserNotificationCount } from "../utils/pb";

//Get notifications count
export function getNotificationCount(id:string){
    return queryOptions({
        queryKey: ['notifications_count'],
        queryFn: () => _GetUserNotificationCount(id),
        placeholderData: (prev) => prev
    })
}

//Get all notifications
export function getAllNotifications(id:string){
    return queryOptions({
        queryKey: ['user_notifications'],
        queryFn: () => _GetAllUserNotifications(id),
        placeholderData: (prev) => prev
    })
}