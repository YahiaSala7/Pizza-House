import React from 'react'
import './logandregister.css'
import '../general.css'
import Header from '../HomePage/Header/Header'
import Footer from '../HomePage/Footer/Footer'
import Login from './Login'

function DisblayLogin() {
  return (
    <div>
        <Header/>
        <Login/>
        <Footer/>
    </div>
  )
}

export default DisblayLogin