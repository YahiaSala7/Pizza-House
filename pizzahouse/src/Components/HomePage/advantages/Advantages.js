import React from 'react'
import './advantages.css'
import '../../general.css'
import Advan from './Advan'
import { faWifi } from '@fortawesome/free-solid-svg-icons'
import { faMap } from '@fortawesome/free-solid-svg-icons'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'
function Advantages() {
  return (
    <div className='advantages'>
    <div className="container">
    <Advan icon={faThumbsUp}  h3="Best Service" p="The client is our #1 priority as we deliver top-notch customer service."/>
    <Advan icon={faMap}  h3="Convenient Location" p="Our pizzeria is situated in the downtown and is very easy to reach even on weekends."/>
    <Advan icon={faWifi} h3="Free Wi-Fi" p="We have free Wi-Fi available to all clients and visitors of our pizzeria."/>
    <Advan icon={faBagShopping} h3="Free Delivery" p="If you order more than 3 pizzas, we will gladly deliver them to you for free."/>

    </div>
    </div>
  )
}

export default Advantages