import PocketBase from "pocketbase"
export const pb = new PocketBase("http://127.0.0.1:8090/");
pb.autoCancellation(false)

//Login
export async function _Login(name:string, passwd: string){
    await pb.collection("users").authWithPassword(name, passwd);
    return pb.authStore.isValid
}
//Logout
export async function _LogOut(){
    pb.authStore.clear()
    return pb.authStore.isValid
}
//Register
export async function _Register(email:string, password: string,passwordConfirm:string , name: string) {
    const data = {
        "email": email, 
        "password": password,
        "passwordConfirm": passwordConfirm,
        "name": name,
    }

    const res = await pb.collection('users').create(data)

    return res
}

//get tags
export async function _getTags(){
    const res = await pb.collection('tags').getFullList()
    return res
}

//Get tag stats
export async function _getTagStats(){
    const res = await pb.collection('tags_stats').getFullList()
    return res
}

//Get published articles
export async function _getPublished() {
    const res = await pb.collection('articles').getFullList({
        filter: pb.filter("status = {:id}", {id:"published"}),
        sort: '-published',
        expand:'tags,author'
    })
    return res
}

//Get published articles by tag
export async function _getPublishedByTag(tag:string){
        const res = await pb.collection('articles').getFullList({
        filter: pb.filter("status = {:id} && tags = {:tag}", {id:"published", tag:tag}),
        sort: '-published',
        expand: 'author,tags'
    })
    return res
}

//Get latest articles
export async function _getLatest(){
    const res = await pb.collection('articles_latest').getFullList({
        expand: "tags"
    })
    return res
}

//Get Article by id
export async function _GetArticle(id:string){
    const res = await pb.collection('articles').getOne(id, {
        expand: 'author,tags'
    })
    return res
}

//Create Article
export async function _CreateArticle(title:string,cover:string,status:string,tag:string,content:any) {
    const data = {
        "author": pb.authStore.model?.id,
        "title": title,
        "cover": cover,
        "content": content,
        "status": status,
        "tags":tag
    }

    const res = await pb.collection('articles').create(data)
    return res
}

//Update Article
export async function _UpdateArticle(id:string,title:string,cover:string,status:string,tag:string,content:any) {
    const data = {
        "title": title,
        "cover": cover,
        "content": content,
        "status": status,
        "tags":tag
    }

    const res = await pb.collection('articles').update(id,data)
    return res
}

//Get Article Comments
export async function _GetArticleComments(id:string){
    const res = await pb.collection('comments').getFullList({
        filter: pb.filter("article = {:id}",{id:id}),
        sort: '-created',
        expand:'user'
    })

    return res

}

//Create Comment
export async function _CreateComment(message: string, article:string) {
    const data = {
        "article": article,
        "user": pb.authStore.record?.id,
        "content": message
    }

    const res = await pb.collection('comments').create(data)

    return res

}

//Admin change article status
export async function _AdminSetArticleStatus(id:string, status:string) {
    const data = {
        "status": status
    }

    const res = await pb.collection('articles').update(id, data)
    return res
}