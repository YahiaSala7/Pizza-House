import React from 'react'
import'./Opinion.css'

function Opinion(props) {
  return (
    <div className='peopop'>
        <p>{props.comment}</p>
        <h3>{props.name}</h3>
        <h4>{props.position}</h4>
        <img alt=''>{props.image}</img>
         
      
    </div>
  )
}

export default Opinion
