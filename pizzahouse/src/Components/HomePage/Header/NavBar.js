import React from 'react'
import './css/nav.css'
import '../../general.css'
import { NavLink } from 'react-router-dom'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function NavBar() {

  return (
    <div className='nav'>
        <ul>
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/Aboutus">About us</NavLink></li>
            <li><NavLink to="/Menu">Menu</NavLink></li>
            <li><NavLink to="/Contacts">Contacts</NavLink></li>
        </ul>
      <div className="bars" id='bars-button' >
        <span className='line-one' id=''></span>
        <span className='line-two'></span>
        <span className='line-three'></span>
      </div>
    </div>
  )
}

export default NavBar
