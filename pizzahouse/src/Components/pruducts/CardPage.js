import React from 'react'
import Card from './Card'
import img1 from '../imgs/Products/product-1-161x162.png'
import img2 from '../imgs/Products/product-2-161x162.png'
import img3 from '../imgs/Products/product-3-161x162.png'
import img4 from '../imgs/Products/product-4-161x162.png'
import img5 from '../imgs/Products/1109-pizzajpg-c22fad60828ea9a6.jpg'
import img6 from '../imgs/Products/R.png'
import img7 from '../imgs/Products/OIP.jpeg'
import img8 from '../imgs/Products/OIP (1).jpeg'
import '../general.css'
import './card.css'
function CardPage() {
  return (
    <div className='cardpage'>
<div className="container">
        <Card img={img1} name="Mashrome pizza" price="24$"/>
        <Card img={img2} name="Chicken pizza" price="$21"/>
        <Card img={img3} name="Halibino Pizza" price="$27"/>
        <Card img={img4} name="Margherita Pizza" price="$20 "/>
        <Card img={img5} name="Meat Pizza" price="$ 28 "/>
        <Card img={img6} name="Ranch Pizza" price="$21 "/>
        <Card img={img7} name="Chrimp Pizza" price="$35 "/>
        <Card img={img8} name="Tona Pizza" price="$30 "/>
</div>
    </div>
  )
}

export default CardPage