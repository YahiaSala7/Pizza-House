import React from 'react'
import Header from './Header/Header'
import Landing from './Landing/Landing'
import Footer from './Footer/Footer'
import MainTitle from '../MainTitle'
import Menu from './content/menu/Menu'
// import Services from './services/Services'
function homePage() {
  return (
    <div>
        <Header/>
        <Landing/>  
        <MainTitle main="Our Best Menu "/>  
        <Menu/>
        {/* <Services/> */}

        {/* <MainTitle main="SELECTED PIZZAS "/>   */}
        {/* <Footer/> */}
    </div>
  )
}

export default homePage