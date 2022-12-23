import React from 'react'
import '../general.css'
import Card from '../pruducts/Card'
import img1 from '../imgs/Products/product-1-161x162.png'
import img2 from '../imgs/Products/product-2-161x162.png'
import img3 from '../imgs/Products/product-3-161x162.png'
import img4 from '../imgs/Products/product-4-161x162.png'
import img5 from '../imgs/Products/pngegg (1).png'
import img6 from '../imgs/Products/Hawaiian Pizza.png'
import img7 from '../imgs/Products/Pizza cheese.png'
import img8 from '../imgs/Products/pizza Sushi.png'
import '../pruducts/card.css'
function pizza() {
  return (
    <div className='cardpage'>
      <div className="container">
        <Card img={img1} name="Mashrome pizza" price="24$"/>
        <Card img={img2} name="Chicken pizza" price="$21"/>
        <Card img={img3} name="Halibino Pizza" price="$27"/>
        <Card img={img4} name="Margherita Pizza" price="$20 "/>
        <Card img={img5} name="pepperoni pizza" price="$23 "/>
        <Card img={img6} name="Hawaiian Pizza" price="$22 "/>
        <Card img={img7} name="cheese Pizza" price="$21 "/>
        <Card img={img8} name="Sushi Pizza" price="$24 "/>
      </div>
    </div>
  )
}

export default pizza