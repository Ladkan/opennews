import { useState } from "react"
import InputGroup from "../lib/ui/InputGroup"
import { Link, Navigate } from "react-router-dom"
import '../lib/scss/login.scss'
import { _Login, pb } from "../lib/utils/pb"


function Login(){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [isLoggin, setIsLoggin] = useState(pb.authStore.isValid)

    const handleLogin = async (e: { preventDefault: () => void }) => {
        e.preventDefault()
        
        const data = await _Login(email, password)
        setIsLoggin(data)
    }

    return(
    <>
        {isLoggin ? (<Navigate to="/" />)  : (
            <section>
            <div className="container w-48">
                <form className="login" onSubmit={handleLogin} >
                    <div className="text">
                        <h2>Welcome back</h2>
                        <p>Login to your Opennews account</p>
                    </div>
                    <InputGroup name="email" type="email" placeholder="me@test.com" handleChange={setEmail} />
                    <InputGroup name="password" type="password" handleChange={setPassword} />
                    <button type="submit" >Login</button>
                    <p>Don't have an acount? <Link to="/register" >Register</Link></p>
                </form>
            </div>
        </section>
        )}
    </>
    )
}

export default Login
