import React from 'react'
import '../general.css'
import Card from '../pruducts/Card'
import img1 from '../imgs/Desserts/Cheesecake.png'
import img2 from '../imgs/Desserts/Crème caramel.png'
import img3 from '../imgs/Desserts/Gelatin pudding.png'
import img4 from '../imgs/Desserts/Kunafa.png'
import img5 from '../imgs/Desserts/Molten chocolate cake.png'
import img6 from '../imgs/Desserts/Chocolate ice cream.png'
import img7 from '../imgs/Desserts/ice cream cup with strawberries.png'
import img8 from '../imgs/Desserts/waffles with strawberries.png'
import '../pruducts/card.css'
function Desserts() {
  return (
    <div className='cardpage'>
      <div className="container">
        <Card img={img1} name="Cheesecake" price="18$"/>
        <Card img={img2} name="Crème caramel" price="13$"/>
        <Card img={img3} name="Gelatin pudding" price="14$"/>
        <Card img={img4} name="Kunafa with Nuts" price="16$"/>
        <Card img={img5} name="Molten chocolate cake" price="14$"/>
        <Card img={img6} name="Chocolate ice cream" price="17$"/>
        <Card img={img7} name="ice cream cup with strawberries" price="18$"/>
        <Card img={img8} name="waffles with strawberries" price="14$"/>
      </div>
    </div>
  )
}

export default Desserts