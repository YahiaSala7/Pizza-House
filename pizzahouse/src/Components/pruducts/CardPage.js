import React from 'react'
import Card from './Card'
import img from '../imgs/Products/product-1-161x162.png'
import '../general.css'
import './card.css'
function CardPage() {
  return (
    <div className='cardpage'>
<div className="container">
<Card img={img} name="Margherita Pizza" price="24$"/>
        <Card img={img} name="Margherita Pizza" price="$24"/>
        <Card img={img} name="Margherita Pizza" price="$24"/>
        <Card img={img} name="Margherita Pizza" price="$  24"/>
</div>
    </div>
  )
}

export default CardPage