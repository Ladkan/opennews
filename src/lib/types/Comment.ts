import type { User } from "./User";

export declare type Comment = {
    id:string,
    article:string,
    user:User,
    content: string,
    created:Date,
    updated:Date
}