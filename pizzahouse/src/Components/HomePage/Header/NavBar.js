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
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="Aboutus">About us</NavLink></li>
            <li><NavLink to="/Menu">Menu</NavLink></li>
            <li><NavLink to="/Contacts">Contacts</NavLink></li>
        </ul>
        <FontAwesomeIcon icon={faBars} className="icon"></FontAwesomeIcon>
    </div>
  )
}

export default NavBar