import React from 'react'
import './advantages.css'
import '../../general.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Advan(props) {
  return (
    <div className='advan'>
        <div className="icon">
        <FontAwesomeIcon icon={props.icon}></FontAwesomeIcon>
        </div>
        <h3>{props.h3}</h3>
        <p>{props.p}</p>
    </div>
  )
}

export default Advan