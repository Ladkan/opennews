import type { User } from "./User"

export declare type Verification = {
    id: string,
    article: string,
    user: User,
    type: string,
    comment: string,
    created: Date,
    updated: Date
}