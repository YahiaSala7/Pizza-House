import React, { Component, useState } from "react"
import "./aboutus.css";
import '../general.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHelicopter } from '@fortawesome/free-solid-svg-icons';
import { faPizzaSlice } from '@fortawesome/free-solid-svg-icons';
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faLeaf } from '@fortawesome/free-solid-svg-icons';
import Header from "../HomePage/Header/Header";
import Footer from "../HomePage/Footer/Footer";
import LandSection from "../HomePage/LandSection/LandSection";
import MainTitle from "../MainTitle";
import pm from './imgs/about-1-835x418.jpg'
import OurTeamSction from "./OurTeamSction";
import ScrollUp from "../ScrollUp/ScrollUp";
// import Opinion from "./Opinion";
class Aboutus extends Component {
    constructor(){
        
        super();
   this.state={title:'A FEW WORDS ABOUT US',para:"The key to progress is much similar to the key to improving a pizza – the more you put into it, the more you receive in return. Our pizza family is as eager for flawlessness today as we were the point at which we originally opened our entryways over 40 years back. Also, we’re headed to be the best at making creative new items and formulas. Quality is at our center. It’s the establishment we begun with, from the main ‘Organization Name’ pizza that was made in a sweeper storage room in Manhattan, IN, to now in excess of 5,000 areas in 45 nations and regions around the globe. We don’t utilize shabby and increasingly prepared fixings. Regardless of whether it’s our mark sauce, fixings, our unique new mixture, or even the case itself, we put resources into our fixings to guarantee that we generally give you the best quality pizza. For you, it’s not only a superior pizza. It’s a family assembling, important birthday, work festivity or basically an incredible supper. It’s our objective to ensure you generally have the best elements for each event."}
}
render() {
    return (
      <div>
        <Header  />

        <LandSection land="About Us"/>
      
  
          <div className="paragraph">
          <div className="container">
            <div className="para">
            <h2 className="h2">{this.state.title}</h2>
            <p className="p1">{this.state.para}</p>
            <img src={pm} alt="" ></img>
            </div>
            <div className="sidebar">
              <h5>10+ years of experience</h5>
              <ul className="list">
                <li >
                  <a  data-toggle="tab"  onClick={() => this.setState({title:<h2 className="h2">A FEW WORDS ABOUT US</h2>,para:<p className="p1">The key to progress is much similar to the key to improving a pizza – the more you put into it, the more you receive in return. Our pizza family is as eager for flawlessness today as we were the point at which we originally opened our entryways over 40 years back. Also, we’re headed to be the best at making creative new items and formulas. Quality is at our center. It’s the establishment we begun with, from the main ‘Organization Name’ pizza that was made in a sweeper storage room in Manhattan, IN, to now in excess of 5,000 areas in 45 nations and regions around the globe. We don’t utilize shabby and increasingly prepared fixings. Regardless of whether it’s our mark sauce, fixings, our unique new mixture, or even the case itself, we put resources into our fixings to guarantee that we generally give you the best quality pizza. For you, it’s not only a superior pizza. It’s a family assembling, important birthday, work festivity or basically an incredible supper. It’s our objective to ensure you generally have the best elements for each event.</p>})}>
                    AboutUs
                  </a>
                </li>
                <li>
                  <a  data-toggle="pointer"  onClick={() => this.setState({title:<h2 className="h2">OFFERING THE BEST PIZZA IN LOS ANGELES</h2>,para:<p className="p1">What does your restaurant do? We sell the best deep-dish pizza in the area and provide a fun experience for families.
                    How does your restaurant do it? Our food tastes great because we use a special tomato sauce recipe that has been passed down over generations and we always buy fresh ingredients. We provide a great experience by focusing on the needs of each customer.
                    Why does your restaurant do it? We hope to provide a new and unique dining experience for locals.</p>})}>
                    OurMission
                  </a>
                </li>
                <li>
                  <a  data-toggle="pointer"   onClick={() => this.setState({title:<h2 className="h2">PROVIDING TOP-NOTCH CUSTOMER SERVICE</h2>,para:<p className="p1">“Our diner mission is to welcome every guest with open arms, to serve up joy, belonging, and love with every meal, and to treat employees like family.
                    Our giving mission is to support philanthropic efforts—as a company on a national level and within our local communities through sponsorship’s and fundraising events.”</p>})}>
                    OurGoals
                  </a>
                </li>
                <li>
                  <a  data-toggle="pointer" onClick={() => this.setState({title:<h2 className="h2">Core Values</h2>,para:<p className="p1">The Core Values of Pizza House are honesty, greatness, productivity, and authoritative development. These four features of its philosophy drive choices at each degree of the executives. 

This methodology urges every laborer to confront each challenge that comes their direction. By giving workers preparing devices that permit them to get effective, Pizza House would like to accomplish the best expectations in their industry. 

The objective is to assist individuals with feeling enabled. On the off chance that people develop expertly, at that point the organization can keep growing its worldwide effort. 

Pizza House applies its fundamental beliefs to each part of their business to screen and improve deals at whatever point conceivable. This work makes investor certainty, guaranteeing that individuals can invest wholeheartedly in their capacity to make an ideal pizza without fail.</p>})} >
                    OurValues
                  </a>
                </li>
              </ul>
              <button className="button  glow-on-hover">Contact US</button>
            </div>
          </div>
          </div>
          <div className="ourfeatures">
            <div className="container">
                <div className="box">
                  <FontAwesomeIcon icon={faHelicopter} className='icons'></FontAwesomeIcon>
                  <h3>Free Delivery</h3>
                  <p>Lotus advenas ducunt ad gemna. Ubi est domesticus domina heu.</p>
                </div>
                <div className="box">
                  <FontAwesomeIcon icon={faPizzaSlice} className='icons'></FontAwesomeIcon>
                  <h3>20+ Pizza Options</h3>
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh</p>
                </div>
                <div className="box">
                  <FontAwesomeIcon icon={faLeaf} className='icons'></FontAwesomeIcon>
                  <h3>Fresh Ingredients</h3>
                  <p>Albus, dexter particulas grauiter consumere de ferox, bi-color abactus.</p>
                </div>
          </div>
          </div>
          <MainTitle main="Our Team "/>  
        <OurTeamSction/>
 <Footer />
 <ScrollUp/>
      </div>
    );
  }
}

export default Aboutus;
