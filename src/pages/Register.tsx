import { useState } from "react"
import { _Register, pb } from "../lib/utils/pb"
import { Link, Navigate, useNavigate } from "react-router-dom"
import InputGroup from "../lib/ui/InputGroup"

function Register(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')

    const [isLoggin, setIsLoggin] = useState(pb.authStore.isValid)
    let nav = useNavigate()
    const handleRegister = async (e: { preventDefault: () => void }) => {
        e.preventDefault()
        
        const data = await _Register(email, password,passwordConfirm,name)
        if(data)
            nav("/login")
    }

    return(
    <>
        {isLoggin ? (<Navigate to="/" />)  : (
            <section>
            <div className="container w-48">
                <form className="login" onSubmit={handleRegister} >
                    <div className="text">
                        <h2>Welcome</h2>
                        <p>Create your Opennews account</p>
                    </div>
                    <InputGroup name="email" type="email" placeholder="me@test.com" handleChange={setEmail}/>
                    <InputGroup name="name" type="text" handleChange={setName} />
                    <InputGroup name="password" type="password" handleChange={setPassword} />
                    <InputGroup name="passwordConfirm" type="password" handleChange={setPasswordConfirm} />
                    <button type="submit" >Register</button>
                    <p>Already have an account? <Link to="/login" >Login</Link></p>
                </form>
            </div>
        </section>
        )}
    </>
    )
}

export default Register