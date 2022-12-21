import React from 'react'
import './features.css'

function features(props) {
  return (
    <div>
      <div className='paragraph'>
        <h3>{props.header}</h3>
        <p>{props.paragraph}</p>
      </div>
    </div>
  )
}

export default features
