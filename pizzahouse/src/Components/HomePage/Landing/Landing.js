import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../../general.css'
import './css/landing.css'
import { useState } from 'react'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import img1 from '../../imgs/Landing/pizza3.jpg'
import img2 from '../../imgs/Landing/pizza22.jpg'

function Landing() {
  const changeBackgroundLeft = () => {
    const imgOne = document.getElementById("img1");
    const imgTwo = document.getElementById("img2");
    imgTwo.style.right=0;
    imgOne.style.left="-100%";
    // imgOne.style.position="relative"; 

  }
  const changeBackgroundRight = () => {
    const imgOne = document.getElementById("img1");
    const imgTwo = document.getElementById("img2");
    imgOne.style.left=0; 
    imgTwo.style.right="-100%";

  }
  const route = useNavigate()
  return (
      <div className='landing' id='landingid'>
      <div id='img1' className='img-two' ><img src={img2} alt=""  /></div>
      <div id='img2'  className='img-one'><img src={img1} alt=""  /></div>
        <div className="info">
          <h1 className='head1'>Perfect pizza </h1>
          <p className='parg1'>Experience the taste of a perfect pizza at PizzaHouse, one of the best restaurants</p>
          <button className='view' onClick={() => route('Menu')}>View Our Menu</button>
        </div>
        <div className="icon-left i" id='left'onClick={changeBackgroundLeft}>
            <FontAwesomeIcon icon={faArrowLeft} className="icon" ></FontAwesomeIcon>
            <img src={img1} alt="" />
          </div>
          <div className="icon-right i" id='right' onClick={changeBackgroundRight}>
            <FontAwesomeIcon icon={faArrowRight} className="icon"></FontAwesomeIcon>
            <img src={img2} alt="" />
          </div>
    </div>
  )
}


export default Landing
