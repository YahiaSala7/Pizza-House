import React from 'react'
import '../../general.css'
import './css/landing.css'
import pizaa15 from'../../imgs/Landing/pizza.jpg'
import { useState } from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' 

function Landing() {



// console.log(style);

  return (
    <div className='landing' id='landingid'>
      <img src={pizaa15} alt="" />
      <div className="info">
      <h1 className='head1'>Perfect pizza </h1>
      <p className='parg1'>Experience the taste of a perfect pizza at PizzaHouse, one of the best restaurants</p>
      <button className='view'>View Our Menu</button>
      </div>
    </div>
  )
}
let height;
let width;
const dHeight=()=>{
let width1 = window.innerWidth;
width=`${width1.toString()- 20}px `
height=`${width1.toString() /1.9}px`
}
window.onresize = dHeight() ;
// window.onload= dHeight();

console.log( width );
console.log(height  );
// const LandSection = document.getElementById("landingid")
// window.onresize = dHeight ;
// window.onload= dHeight;
// let width = window.innerWidth;
// function dHeight(){
// LandSection.style.width=`${width.toString()}px - 20px `
// LandSection.style.height=`${width.toString() / 1.9}px `
// }
export default Landing
