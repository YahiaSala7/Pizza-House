import React from 'react'
import { useState,useEffect } from 'react'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './scrollup.css'
import '../general.css'
function ScrollUp() {
 const [scrollToTop,setscrollToTop]=useState(false);

 useEffect(()=>{
window.addEventListener("scroll",()=>{
    if(window.scrollY > 150){
    setscrollToTop(true)
    }else{
    setscrollToTop(false)
    }
})
 },[])

 const ScrollUpToTop=()=>{
    window.scrollTo({
    top:0,
    behavior:"smooth"
    })
 }

  return (
    <div>
    {scrollToTop && (
        <div className="scroll-up" onClick={ScrollUpToTop}>
        <FontAwesomeIcon icon={faArrowUp} className="icon"></FontAwesomeIcon>
        </div>
        
    )}
    </div>
  )
}

export default ScrollUp