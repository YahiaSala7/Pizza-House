import React from 'react'
import './Ourteam.css'
import '../general.css'
function Ourteam(props) {
  return (
    
    <div className='ourteam'>
      <img src={props.img} alt="" />
   <div className="inf">
   <h3>{props.name}</h3>
      <h4>{props.rule}</h4>
   </div>
  </div>

  )
}

export default Ourteam
