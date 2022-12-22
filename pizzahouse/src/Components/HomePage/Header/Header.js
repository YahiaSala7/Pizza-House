import React from 'react'
import NavBar from './NavBar'
import logo from '../../imgs/Logo/logo-198x66.png'
import  './css/header.css'
import '../../general.css'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Header() {
  return (
    <div className='header'>
      <div className="container">
    <div className='part-one'><img src={logo} alt="Logo of page" /></div>
    <NavBar path="../../Aboutus/Aboutus.js"/>
    <div className="cart">
      <FontAwesomeIcon icon={faCartShopping} className="icon"></FontAwesomeIcon>
      <a href="#"></a>
    </div>
    </div>

    </div>
  )
}

export default Header