import React from 'react'
import './css/nav.css'
import '../../general.css'
function NavBar() {
  return (
    <div className='nav'>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Memu</a></li>
            <li><a href="#">Contacts</a></li>
        </ul>
    </div>
  )
}

export default NavBar