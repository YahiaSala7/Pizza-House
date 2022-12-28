import React from 'react'
import Footer from '../HomePage/Footer/Footer'
import Header from '../HomePage/Header/Header'
// import Land from '../Aboutus/land/land'
import MainTitle from '../MainTitle'
import Pizza from './pizza'
import Drinks from './Drinks'
import SeaFood from './SeaFood'
import Salads from './Salads'
import Deserts from './Desserts'
import Burgers from './Burgers'
import ScrollUp from '../ScrollUp/ScrollUp'
function MenuPage() {
  return (
    <div>
      <Header/>

      {/* <Land title="Menu"/> */}

      <MainTitle main="Pizza"/>
      <Pizza/>

      <MainTitle main="salads"/>
      <Salads/>

      <MainTitle main="seafood"/>
      <SeaFood/>

      <MainTitle main="burgers"/>
      <Burgers/>

      <MainTitle main="drinks"/>
      <Drinks/>

      <MainTitle main="desserts"/>
      <Deserts/>

      <MainTitle/>
      
      <ScrollUp/>

      <Footer/>
    </div>
  )
}

export default MenuPage