import React from 'react'
import './LandSection.css'
function LandSection(Props) {
  return (
    <div className='landing-section'>
    <h1>{Props.land}</h1>
    </div>
  )
}

export default LandSection