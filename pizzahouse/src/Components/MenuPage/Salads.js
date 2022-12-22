import React from 'react'
import '../general.css'
import Card from '../pruducts/Card'
import img1 from '../imgs/Salads/Arabic Fattoush.png'
import img2 from '../imgs/Products/product-2-161x162.png'
import img3 from '../imgs/Products/product-3-161x162.png'
import img4 from '../imgs/Products/product-4-161x162.png'
import '../pruducts/card.css'
function Salads() {
  return (
    <div className='cardpage'>
      <div className="container">
        <Card img={img1} name="Arabic Fattoush" price="18$"/>
        <Card img={img1} name="Arabic Fattoush" price="18$"/>
        <Card img={img1} name="Arabic Fattoush" price="18$"/>
        <Card img={img1} name="Arabic Fattoush" price="18$"/>
        <Card img={img1} name="Arabic Fattoush" price="18$"/>
        <Card img={img1} name="Arabic Fattoush" price="18$"/>
        <Card img={img1} name="Arabic Fattoush" price="18$"/>
        <Card img={img1} name="Arabic Fattoush" price="18$"/>
        <Card img={img1} name="Arabic Fattoush" price="18$"/>
        <Card img={img1} name="Arabic Fattoush" price="18$"/>
        <Card img={img1} name="Arabic Fattoush" price="18$"/>
      </div>
    </div>
  )
}

export default Salads