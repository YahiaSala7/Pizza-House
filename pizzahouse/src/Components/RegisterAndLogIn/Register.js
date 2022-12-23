import React from 'react'
import Footer from '../HomePage/Footer/Footer'
import Header from '../HomePage/Header/Header'
import Land from '../Aboutus/land/land'
import MainTitle from '../MainTitle'

function Register() {
  return (
    <div>
    <Header/>
    
    <Land title="Register"/>
    <Register/>
    <label for="First Name"><b>First Name</b></label>
    <input type="text" placeholder="Enter First Name" name="First Name" id="First Name" required/>

    <label for="Last Name"><b>Last Name</b></label>
    <input type="text" placeholder="Enter Last Name" name="Last Name" id="Last Name" required/>

    <label for="Phine"><b>Phone</b></label>
    <input type="text" placeholder="Enter Phine" name="Phine" id="Phine" required/>

    <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" id="email" required/>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" id="psw" required/>

    <label for="psw-repeat"><b>Repeat Password</b></label>
    <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required/>
    <hr></hr>
    
      <Footer/>
    </div>
  )
}

export default Register