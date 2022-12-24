import React , {Component} from 'react'
import { useNavigate } from 'react-router-dom'
import './logandregister.css'
function Login (){
  

    const route = useNavigate()
    return (
      <div>
        <div className="login">
            <h1>Login</h1>
            <input type="text" name="email"  placeholder="Enter your Email"></input>
            <input type="password" name="password"   placeholder="Enter your Password" ></input>
            <div className="button" >Login</div>
            <div>or</div>
            <div className="button" onClick={() => route('/Register')}>Register</div>
        </div>
    </div>
    )
}

export default Login