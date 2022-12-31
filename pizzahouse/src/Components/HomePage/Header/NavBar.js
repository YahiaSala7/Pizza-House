import {React,useState} from 'react'
import './css/nav.css'
import '../../general.css'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
function NavBar({setLoginUser}) {
  const [user,setUser]=useState(setLoginUser);
const [rotate,setRotate]=useState(false);
const rotateSideBar =()=>setRotate(!rotate);
  return (
    <div className='nav'>
        <ul className={rotate ? 'list':''}>
            <li><NavLink exact to="/">Home</NavLink ></li>
            <li><NavLink to="/Aboutus">About us</NavLink></li>
            <li><NavLink to="/Menu">Menu</NavLink></li>
            <li><NavLink to="/Contacts">Contacts</NavLink></li>
            <li>
            <div className="cart">
            <NavLink to="/AddtoCart"><FontAwesomeIcon icon={faCartShopping} className="icon"></FontAwesomeIcon></NavLink>
            </div>
            </li>
            <li> <NavLink to="/Login">Log in</NavLink> </li>
            <li><NavLink to="/Register">Register</NavLink></li>
            <li><NavLink to="/Login" onClick={()=>setLoginUser({})}>Log out</NavLink></li>
        </ul>
      <div className={rotate ? 'bars first-rotate':'bars second-rotate'} id='bars-button' onClick={rotateSideBar}>
        <span className='line-one' id=''></span>
        <span className='line-two'></span>
        <span className='line-three'></span>
      </div>
    </div>
  )
}
// className={sidebar ? 'first-roate': 'second-rotate'}

export default NavBar
