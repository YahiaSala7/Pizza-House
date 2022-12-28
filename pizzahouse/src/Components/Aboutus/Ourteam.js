import React from 'react'
import './Ourteam.css'

function Ourteam(props) {
  return (
    
    <div className='ourteam'>
        <div className='faces'>
            <img src={props.img} alt=''  width="219" height="300"/>
            <h3>{props.name}</h3>
            <p>{props.rule}</p>
            <div class="load-wrapp">
      <div class="load-10">
        <div class="bar"></div>
      </div>
    </div>
  </div>
</div>
  )
}

export default Ourteam
