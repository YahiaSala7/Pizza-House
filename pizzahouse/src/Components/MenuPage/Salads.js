import React from 'react'
import '../general.css'
import Card from '../pruducts/Card'
import img1 from '../imgs/Salads/Arabic Fattoush.png'
import img2 from '../imgs/Salads/Asian waldorf salad.png'
import img3 from '../imgs/Salads/Ceviche salad.png'
import img4 from '../imgs/Salads/Coleslaw Caridea salad.png'
import img5 from '../imgs/Salads/Egyptian salad.png'
import img6 from '../imgs/Salads/Greek salad.png'
import img7 from '../imgs/Salads/Spinach salad.png'
import img8 from '../imgs/Salads/Vegetable Salad.png'
import '../pruducts/card.css'
function Salads() {
  return (
    <div className='cardpage'>
      <div className="container">
        <Card img={img1} name="Arabic Fattoush" price="18$"/>
        <Card img={img2} name="Asian waldorf salad" price="13$"/>
        <Card img={img3} name="Ceviche salad" price="16$"/>
        <Card img={img4} name="Coleslaw Caridea salad" price="14$"/>
        <Card img={img5} name="Egyptian salad" price="19$"/>
        <Card img={img6} name="Greek salad" price="17$"/>
        <Card img={img7} name="Spinach salad" price="15$"/>
        <Card img={img8} name="Vegetable Salad" price="13$"/>
      </div>
    </div>
  )
}

export default Salads