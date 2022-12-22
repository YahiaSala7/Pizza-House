import React from 'react'
import '../general.css'
import Card from '../pruducts/Card'
import img1 from '../imgs/Seafood/Caldeirada Cazuela Seafood.png'
import img2 from '../imgs/Seafood/Jamaican cuisine Fried fish.png'
import img3 from '../imgs/Seafood/Prawns Caridea Thai cuisine .png'
import img4 from '../imgs/Seafood/pngegg.png'
import img5 from '../imgs/Seafood/Octopus Squid as food Thai fried rice.png'
import '../pruducts/card.css'
function SeaFood() {
  return (
    <div className='cardpage'>
      <div className="container">
        <Card img={img1} name="Caldeirada Cazuela" price="18$"/>
        <Card img={img2} name="Jamaican Fried fish" price="18$"/>
        <Card img={img3} name="Prawns Caridea Thai" price="18$"/>
        <Card img={img4} name="thai crab with red souce" price="18$"/>
        <Card img={img5} name="Octopus Squid with fried rice" price="18$"/>
      </div>
    </div>
  )
}

export default SeaFood