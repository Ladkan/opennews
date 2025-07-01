import { useRef, useState } from "react"
import BundledEditor from "../lib/components/BundleEditor"
import { useTagsContext } from "../lib/context/TagsContext"
import InputGroup from "../lib/ui/InputGroup"
import '../lib/scss/create.scss'
import Button from "../lib/ui/Button"
import { _CreateArticle } from "../lib/utils/pb"
import { useNavigate } from "react-router-dom"

function Create(){
    const {data} = useTagsContext()
    const editorRef = useRef(null)

    const [title, setTitle] = useState('')
    const [cover, setCover] = useState('')
    const [tag, setTag] = useState('')
    let nav = useNavigate()
    const handleSubmit = async (status:string) => {
        if(editorRef.current){
            const res = await _CreateArticle(title,cover,status,tag,editorRef.current.getContent())
            nav("/update/"+res.id)
        }
    }

    return(
        <div className="container">
            <section className="article-create">
                <InputGroup name="title" type="text" handleChange={setTitle} />
                <InputGroup name="cover" type="text" handleChange={setCover} placeholder="https://postimg.cc/" />
                <InputGroup name="tag" type="select" handleChange={setTag} options={data}/>
                <BundledEditor 
                onInit={(_evt, editor) => editorRef.current = editor} 
                init={{
                    plugins: [
                        'image','table','lists','link','autolink','advlist','wordcount'
                    ]
                }}
                />
                <div className="buttons">
                    <Button size="md" variant="outline" action={() => handleSubmit('draft')}>Save as draft</Button>
                    <Button size="md" variant="outline" action={() => handleSubmit('pending')} >Send for approval</Button>
                </div>
            </section>
        </div>
    )
}

export default Create