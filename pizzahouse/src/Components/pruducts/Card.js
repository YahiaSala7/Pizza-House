import React from 'react'
import '../general.css'
import './card.css'
function Card(props) {
  return (
<div className='card-product'>
<div className="face">
<img src={props.img} alt="" />
  <p>{props.name}</p>
  <span>{props.price}</span>
</div>
<div className="buttons">
    <a href="#">Add to cart</a>
    <a href="#">buy</a>
    
</div>
    </div>
  )
}

export default Card