import React , {Component} from 'react'
import Footer from '../HomePage/Footer/Footer'
import Header from '../HomePage/Header/Header'

class Login extends Component{
  render(){
    return (
      <div>
        <Header/>


        <label for="uname"><b>Username</b></label>
        <input type="text" placeholder="Enter Username" name="uname" required/>

        <label for="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw" required/>

        <button type="submit">Login</button>
    
      <Footer/>
    </div>
    )
  }
}

export default Login