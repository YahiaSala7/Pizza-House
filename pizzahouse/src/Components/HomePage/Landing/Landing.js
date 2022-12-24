import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../../general.css'
import './css/landing.css'
import { useState } from 'react'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import img1 from '../../imgs/Landing/pizza.jpg'
import img2 from '../../imgs/Landing/pizza22.jpg'

function Landing() {
const changeBackgroundLeft =()=>{

  const landingid =document.getElementById("landingid");
  const landingidTow=document.getElementById("landingtow");
  landingid.style.opacity="0";
  landingid.style.right="100%";
  landingidTow.style.opacity="1";
  landingidTow.style.left=0;
  // landingidTow.style.position="relative";
  // landingid.style.position="absolute";
}
const changeBackgroundRight =()=>{
  const landingid =document.getElementById("landingid");
  const landingidTow =document.getElementById("landing-two");
  landingid.style.opacity="1";
  // landingidTow.style.opacity="0";
  // landingidTow.style.position="absolute";
  // landingid.style.position="relative";

}
const route = useNavigate()
  return (
    <div>
      <div className="landing-tow landing" id='landingtow'>
      <div className="info">
      <h1 className='head1'>Perfect pizza </h1>
      <p className='parg1'>Experience the taste of a perfect pizza at PizzaHouse, one of the best restaurants</p>
      <button className='view'>View Our Menu</button>
      <div className="icon-left i" id='left'  onClick={changeBackgroundLeft}>
      <FontAwesomeIcon icon={faArrowLeft} className="icon"></FontAwesomeIcon>
      <img src={img1} alt="" />
      </div>
      <div className="icon-right i" id='right'  onClick={changeBackgroundRight}>
      <FontAwesomeIcon icon={faArrowRight} className="icon"></FontAwesomeIcon>
      <img src={img2} alt="" />
      </div>
      </div>
      </div>
      <div className="landing-one"></div>
    <div className='landing' id='landingid'>
      <div className="info">
      <h1 className='head1'>Perfect pizza </h1>
      <p className='parg1'>Experience the taste of a perfect pizza at PizzaHouse, one of the best restaurants</p>
<<<<<<< HEAD
      <button className='view'>View Our Menu</button>
      <div className="icon-left i" id='left'  onClick={changeBackgroundLeft}>
      <FontAwesomeIcon icon={faArrowLeft} className="icon"></FontAwesomeIcon>
=======
      <button className='view'   onClick={() => route('Menu')}>View Our Menu</button>
      <div className="icon-left i" id='left'>
      <FontAwesomeIcon icon={faArrowLeft} className="icon" onClick={changeBackground}></FontAwesomeIcon>
>>>>>>> 83bf5b374eccd1643d543d1488b6ba07774257f9
      <img src={img1} alt="" />
      </div>
      <div className="icon-right i" id='right'  onClick={changeBackgroundRight}>
      <FontAwesomeIcon icon={faArrowRight} className="icon"></FontAwesomeIcon>
      <img src={img2} alt="" />
      </div>
      </div>
    </div>
  </div>
)
}


export default Landing
