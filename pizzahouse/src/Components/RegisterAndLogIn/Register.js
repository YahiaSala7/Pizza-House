import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './logandregister.css'
import '../general.css'
import axios from 'axios'
import Header from '../HomePage/Header/Header'
import Footer from '../HomePage/Footer/Footer'

function Register() {
  const route = useNavigate()


  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterPassword: ""
  })

  const handleChange = e => {
    const { name, value } = e.target
    setUser({
      ...user,
      [name]: value
    })
  }

  const register = () => {
    const { name, email, password, reEnterPassword } = user
    if (name && email && password && (password === reEnterPassword)) {
      axios.post("http://localhost:9002/register", user)
        .then(res => {
          alert(res.data.message)
          route("/login")
        })
    } else {
      alert("password is non match")
    }

  }

  return (
<div className='log-page'>
<Header/>
<div className="register">
<div className="container">
<div className="reg">
      <h1>Register</h1>
      <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={handleChange}></input>
      <input type="text" name="email" value={user.email} placeholder="Your Email" onChange={handleChange}></input>
      <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={handleChange}></input>
      <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={handleChange}></input>
      <div className="button" onClick={register} >Register</div>
      <div>or</div>
      <div className="button" onClick={() => route("/Login")}>Login</div>
    </div>
</div>
</div>
<Footer/>
</div>
  )
}

export default Register