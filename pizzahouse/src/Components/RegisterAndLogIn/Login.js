import React , {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import './logandregister.css'
import axios from 'axios'

function Login ({setLoginUser}){
    const route = useNavigate()

    const [ user, setUser] = useState({
        email:"",
        password:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = () => {
        axios.post("http://localhost:9002/login", user)
        .then(res => {
            alert(res.data.message)
            setLoginUser(res.data.user)
            route('/Menu')
        })
    }

    return (
    <div>
        <div className="login">
            <h1>Login</h1>
            <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
            <input type="password" name="password" value={user.password} onChange={handleChange} placeholder="Enter your Password" ></input>
            <div className="button" onClick={login}>Login</div>
            <div>or</div>
            <div className="button" onClick={() => route('/Register')}>Register</div>
        </div>
    </div>
    )
}

export default Login