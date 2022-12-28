import React from 'react'
import '../../general.css'
import './video.css'
import video from './Pizzahouse.mp4'
function Video() {
  return (
    <div className="video">
        <div className="container">
            <video controls>
            <source src={video} type="video/mp4" ></source>
            </video>
        </div>
    </div>
  )
}

export default Video