import React from 'react'
import NavBar from './NavBar'
import logo from '../../imgs/Logo/logo-198x66.png'
import  './css/header.css'
import '../../general.css'
function Header() {
  return (
    <div className='header'>
      <div className="container">
    <div className='part-one'><img src={logo} alt="Logo of page" /></div>
    <NavBar />
    </div>
    </div>
  )
}

export default Header