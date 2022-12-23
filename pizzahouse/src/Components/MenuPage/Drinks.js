import React from 'react'
import '../general.css'
import Card from '../pruducts/Card'
import img1 from '../imgs/Drinks/lemon juice.png'
import img2 from '../imgs/Drinks/Orange juice .png'
import img3 from '../imgs/Drinks/strawberry juice.png'
import img4 from '../imgs/Drinks/Watermelon juice.png'
import img5 from '../imgs/Drinks/Coca-Cola.png'
import img6 from '../imgs/Drinks/mango juice.png'
import img7 from '../imgs/Drinks/Smoothie Milkshake with Strawberry.png'
import img8 from '../imgs/Drinks/ice coffee.png'
import '../pruducts/card.css'
function Drinks() {
  return (
    <div className='cardpage'>
      <div className="container">
        <Card img={img1} name="lemon juice" price="18$"/>
        <Card img={img2} name="Orange juice" price="18$"/>
        <Card img={img3} name="strawberry juice" price="18$"/>
        <Card img={img4} name="Watermelon juice" price="18$"/>
        <Card img={img5} name="Coca-Cola" price="18$"/>
        <Card img={img6} name="mango juice" price="18$"/>
        <Card img={img7} name="Strawberry Milkshake" price="18$"/>
        <Card img={img8} name="ice coffee" price="18$"/>
      </div>
    </div>
  )
}

export default Drinks