import React from 'react'
import './css/nav.css'
import '../../general.css'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function NavBar(Props) {

  return (
    <div className='nav'>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href={Props.path}>About us</a></li>
            <li><a href="#">Memu</a></li>
            <li><a href="#">Contacts</a></li>
        </ul>
        <FontAwesomeIcon icon={faBars} className="icon"></FontAwesomeIcon>
    </div>
  )
}

export default NavBar