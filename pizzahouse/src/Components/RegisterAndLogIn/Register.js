import React from 'react'
import { useNavigate } from 'react-router-dom'
import './logandregister.css'
function Register() {
  const route = useNavigate()
  return (
    <div>
      <div className="reg">
            <h1>Register</h1>
            <input type="text" name="name"  placeholder="Your Name" ></input>
            <input type="text" name="email" placeholder="Your Email" ></input>
            <input type="password" name="password"  placeholder="Your Password" ></input>
            <input type="password" name="reEnterPassword" placeholder="Re-enter Password" ></input>
            <div className="button"  >Register</div>
            <div>or</div>
            <div className="button" onClick={() => route("/Login")}>Login</div>
        </div>
    </div>
  )
}

export default Register