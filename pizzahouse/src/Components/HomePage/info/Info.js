import React from 'react'
import { NavLink } from 'react-router-dom'
import './info.css'
import '../../general.css'
function Info(Props) {
  return (
    <div className={Props.cn}>
    <div className="info">
    <h2>{Props.h2}</h2>
    <p>{Props.p1}</p>
    <p className='active'>{Props.p2}</p>
    <NavLink to="/Contacts">{Props.a}</NavLink>
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
export default Info