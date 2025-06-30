import PocketBase from "pocketbase"
export const pb = new PocketBase("http://127.0.0.1:8090/");
pb.autoCancellation(false)

export async function _Login(name:string, passwd: string){
    await pb.collection("users").authWithPassword(name, passwd);
    return pb.authStore.isValid
}

export async function _LogOut(){
    pb.authStore.clear()
    return pb.authStore.isValid
}

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

export async function _getTags(){
    const res = await pb.collection('tags').getFullList()
    return res
}

export async function _getPublished() {
    const res = await pb.collection('articles').getFullList({
        filter: pb.filter("status = {:id}", {id:"published"}),
        sort: 'published'
    })
    return res
}

export async function _getPublishedByTag(tag:string){
        const res = await pb.collection('articles').getFullList({
        filter: pb.filter("status = {:id} && tags = {:tag}", {id:"published", tag:tag}),
        sort: 'published'
    })
    return res
}

export async function _getPublishedBySearch(search:string){
        const res = await pb.collection('articles').getFullList({
        filter: pb.filter("status = {:id} && title ~ {:search}", {id:"published", search:search}),
        sort: 'published'
    })
    return res
}


export async function _getLatest(){
    const res = await pb.collection('articles_latest').getFullList()
    return res
}

export async function _getTagStats(){
    const res = await pb.collection('tags_stats').getFullList()
    return res
}

export async function _getUserName(id:string){
    const res = await pb.collection('user_names').getOne(id)
    return res
}