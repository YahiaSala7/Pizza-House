import React from 'react'
import './css/nav.css'
import '../../general.css'
import { NavLink } from 'react-router-dom'
function NavBar() {
  return (
    <div className='nav'>
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="Aboutus">About us</NavLink></li>
            <li><NavLink to="/Menu">Menu</NavLink></li>
            <li><NavLink to="/Contacts">Contacts</NavLink></li>
        </ul>
    </div>
  )
}

export default NavBar