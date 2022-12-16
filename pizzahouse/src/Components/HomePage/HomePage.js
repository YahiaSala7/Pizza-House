import React from 'react'
import Header from './Header/Header'
import Landing from './Landing/Landing'
import Footer from './Footer/Footer'
import MainTitle from '../MainTitle'
import Menu from './content/menu/Menu'
import Info from './info/Info'
import CardPage from '../pruducts/CardPage'
import Gallery from './Gallery/Gallery'

function homePage() {
  return (
    <div>
        <Header/>
        <Landing/>  
        <MainTitle main="Our Best Menu "/>  
        <Menu/>
        <Info p1="PizzaHouse is the place of the best pizza and high-quality service." p2="Yahia Salah, Founder" a="View Our Services" h2="Best atmosphere" cn="services"/>
        <MainTitle main="Selected Pizzas "/>  
        <CardPage/>
        <Info  p2="Taste some of the best PizzaHouse salads!" a="Contact Us" h2="-30% on all salads & drinks" cn="contact services"/>
        <MainTitle main="What people say "/>  
        {/* <Gallery/>   */}

        {/* <Footer/> */}
    </div>
  )
}

export default homePage