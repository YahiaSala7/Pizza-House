import React from 'react'
import '../../general.css'
import './css/landing.css'
import pizaa15 from'../../imgs/Landing/pizza.jpg'
import { useState } from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' 
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

function Landing() {
const changeBackground =()=>{
  const landing =document.getElementById("landingid");
  landing.style.backgroundColor="red";
}

  return (
    <div className='landing' id='landingid'>
      {/* <img src={pizaa15} alt="" /> */}
      <div className="info">
      <h1 className='head1'>Perfect pizza </h1>
      <p className='parg1'>Experience the taste of a perfect pizza at PizzaHouse, one of the best restaurants</p>
      <button className='view'>View Our Menu</button>
      </div>
    </div>
  )
}


export default Landing
