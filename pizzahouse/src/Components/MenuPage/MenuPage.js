import React from 'react'
import Footer from '../HomePage/Footer/Footer'
import Header from '../HomePage/Header/Header'
import MainTitle from '../MainTitle'
import Pizza from './pizza'
import Drinks from './Drinks'
import SeaFood from './SeaFood'
import Salads from './Salads'
import Deserts from './Desserts'
import Burgers from './Burgers'
import ScrollUp from '../ScrollUp/ScrollUp'
import LandSection from '../HomePage/LandSection/LandSection'
function MenuPage({setLoginUser}) {
  return (
    <div>
      <Header/>

      <LandSection land="Menu"/>

      <MainTitle main="Pizza"/>
      <Pizza  setLoginUser={setLoginUser}/>

      <MainTitle main="salads"/>
      <Salads setLoginUser={setLoginUser}/>

      <MainTitle main="seafood"/>
      <SeaFood  setLoginUser={setLoginUser}/>

      <MainTitle main="burgers"/>
      <Burgers  setLoginUser={setLoginUser}/>

      <MainTitle main="drinks"/>
      <Drinks setLoginUser={setLoginUser}/>

      <MainTitle main="desserts"/>
      <Deserts  setLoginUser={setLoginUser}/>

      <MainTitle/>
      
      <ScrollUp/>

      <Footer/>
    </div>
  )
}

export default MenuPage