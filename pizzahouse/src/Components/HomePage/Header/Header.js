import React from 'react'
import NavBar from './NavBar'
import logo from '../../imgs/Logo/logo-198x66.png'
import './css/header.css'
import '../../general.css'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'
function Header() {
  return (
    <div className='header'>
      <div className="container">
        <div className='part-one'>
          <img src={logo} alt="Logo of page" /></div>
        <NavBar />
        <div className="cart">
          <FontAwesomeIcon icon={faCartShopping} className="icon"></FontAwesomeIcon>
          <NavLink to="/AddtoCart"></NavLink>
        </div>
        <div className="lgoin"><NavLink to="/Login">Log in</NavLink></div>
        <div className="register"><NavLink to="/Register">Register</NavLink></div>
//
      </div>
    </div>
  )
}

export default Header