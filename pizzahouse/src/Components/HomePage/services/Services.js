import React from 'react'
import './servicse.css'
import '../../general.css'
import ser  from '../../imgs/Servcies/best-atmsophere.jpg'
function services() {
  return (
    <div className='services'>
    <div className="info">
    <h2>Best atmosphere</h2>
    <p>PizzaHouse is the place of the best pizza and high-quality service.</p>
    <p>Ben Smith, Founder</p>
    <a href="#">View Our Services</a>
    </div>
    <div className="img">
        <img src={ser} alt="" />
    </div>
    </div>
  )
}
// const LandSection = document.getElementById("landingid")
// window.onresize = dHeight ;
// window.onload= dHeight;
// function dHeight(){
// let width = window.innerWidth;
// LandSection.style.width=`${width.toString()}px - 20px `
// LandSection.style.height=`${width.toString() / 1.9}px `
// }
export default services