import React from 'react'
import mm from  '../../imgs/Our team photo/bll.jpg'
import './reviwers.css'

function reviwers(props) {
  return (
    <div>
        <div className='therev'>
            <div className='cont'>
                <div className='box'>
      <img src={props.img} alt=''></img>
      <div className='text'>
      <h2>{props.name}</h2>
      <p>{props.review}</p>
      </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default reviwers
