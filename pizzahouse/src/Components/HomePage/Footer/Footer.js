import React from 'react'
import './footer.css'
import '../../general.css'
import foot from '../../imgs/Logo/logo-inverse-198x66.png'
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome'
import {faPhone} from '@fortawesome/free-solid-svg-icons'
import {faMessage} from '@fortawesome/free-solid-svg-icons'
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faGooglePlusG } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer>
      <div className="container">
 <div className=" inf one">
 <div className="box">
          <h3>What We Offer</h3>
          <ul>
            <li><a href="/Menu">Pizzas</a></li>
            <li><a href="/Menu">Burgers</a></li>
            <li><a href="/Menu">Salads</a></li>
            <li><a href="/Menu">Drinks</a></li>
            <li><a href="/Menu">Seafood</a></li>
          </ul>
        </div>
        <div className="box">
          <h3>Information</h3>
          <ul>
            <li><a href="/Aboutus">About us</a></li>
            <li><a href="/Menu">Our Menu</a></li>
            <li><a href="/Contacts">Contact Us</a></li>
          </ul>
        </div>
 </div>
 <div className=" inf two">
  <img src={foot} alt="" />
<div className="phone">
<FontAwesomeIcon icon={faPhone} className="icon"></FontAwesomeIcon>
  <span>+1 718-999-3939</span>
  </div>  
<div className="message">
<FontAwesomeIcon icon={faMessage} className="icon"></FontAwesomeIcon>
  <span>info@demolink.org</span>
</div>
<div className="socail">
  <a href="#"><FontAwesomeIcon icon={faFacebook} className="icon" ></FontAwesomeIcon></a>
  <a href="#"><FontAwesomeIcon icon={faTwitter} className="icon" ></FontAwesomeIcon></a>
  <a href="#"><FontAwesomeIcon icon={faInstagram} className="icon" ></FontAwesomeIcon></a>
  <a href="#"><FontAwesomeIcon icon={faGooglePlusG} className="icon" ></FontAwesomeIcon></a>

</div>
 </div>
      
      <div className=" inf three">
      <span> 514 S. Magnolia St. Orlando, FL 32806</span>
      <span>© 2022. All Rights Reserved. Design by Moataz Essam &&Yahia Salah </span>
      </div>
      </div>
    </footer>
  )
}

export default Footer