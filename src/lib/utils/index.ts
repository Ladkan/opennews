import { pb } from "./pb"

export function FirstToUpper(text:string){
    return String(text).charAt(0).toUpperCase() + String(text).slice(1)
}

export function formatTimeAgo(date:string){
    const now = new Date()
    const from = new Date(date)

    const diffMs = now.getTime() - from.getTime()
    const diffMins = Math.floor(diffMs / (1000 * 60))
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60))
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))

    if(diffMins < 1) return 'Just now'
    if(diffMins < 60) return `${diffMins}m ago`
    if(diffHours < 24) return `${diffHours}h ago`
    return `${diffDays}d ago`

}

export function isUpdated(created:string,updated:string){
    if(created != updated)
        return true

    return false
}

export function isStaff(){
    if(pb.authStore.model.role === "admin" || pb.authStore.model.role === 'moderator'){
        return true
    } 

    return false
}