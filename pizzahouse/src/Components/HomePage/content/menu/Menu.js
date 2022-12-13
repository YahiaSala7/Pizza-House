import React from 'react'
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome'
import {faGlassCheers} from '@fortawesome/free-solid-svg-icons'
import {faPizzaSlice} from '@fortawesome/free-solid-svg-icons'
import {faBurger} from '@fortawesome/free-solid-svg-icons'
import {faIceCream} from '@fortawesome/free-solid-svg-icons'
import {faFish} from '@fortawesome/free-solid-svg-icons'
import {faBowlFood} from '@fortawesome/free-solid-svg-icons'
import m1 from '../../../imgs/Menu/menu1.jpg'
import m2 from '../../../imgs/Menu/menu2.jpg'
import m3 from '../../../imgs/Menu/menu3.jpg'
import m4 from '../../../imgs/Menu/menu4.jpg'
import m5 from '../../../imgs/Menu/menu5.jpg'
import m6 from '../../../imgs/Menu/menu6.jpg'
import './menu.css'
import '../../../general.css'
function Menu() {
  return (
    <div className='menu'>
    <div className="container">
    <div className="card">
    <img src={m1} alt=""  className='img'/>
 <div className='circle-icon'>
 <FontAwesomeIcon icon={faBowlFood} className="icon"></FontAwesomeIcon>
 </div>
 <a href="#"><h3>Salads</h3></a>
    </div>
    <div className="card">
    <img src={m2} alt="" />
 

    <div className='circle-icon'>
    <FontAwesomeIcon icon={faPizzaSlice} className="icon"></FontAwesomeIcon>
    </div>
<a href="#"><h3>Pizzas</h3></a>
    </div>
    <div className="card">
    <img src={m3} alt="" />

    <div className='circle-icon'>
    <FontAwesomeIcon icon={faBurger} className="icon"></FontAwesomeIcon>
    </div>
<a href="#"><h3>Burgers</h3></a>
    </div>
    <div className="card">
    <img src={m4} alt="" />

    <div className='circle-icon'>
    <FontAwesomeIcon icon={faIceCream} className="icon"></FontAwesomeIcon>
    </div>
<a href="">
<h3>Desserst</h3></a></div>
    <div className="card">
    <img src={m5} alt="" />

    <div className='circle-icon'>
    <FontAwesomeIcon icon={faGlassCheers} className="icon"></FontAwesomeIcon>
    </div>
<a href="#">
<h3>Drinks</h3></a></div>
    <div className="card">
    <img src={m6} alt="" />

    <div className='circle-icon'>
    <FontAwesomeIcon icon={faFish} className="icon"></FontAwesomeIcon>

    </div>
<a href="#"><h3>Seafood</h3></a>
    </div>
    </div>
    </div>
  )
}

export default Menu