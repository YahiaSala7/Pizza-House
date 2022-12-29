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
   this.state={title:'A FEW WORDS ABOUT US',para:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit ametconsectetur.'}
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
                  <a  data-toggle="tab"  onClick={() => this.setState({title:<h2 className="h2">A FEW WORDS ABOUT US</h2>,para:<p className="p1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit ametconsectetur.</p>})}>
                    AboutUs
                  </a>
                </li>
                <li>
                  <a  data-toggle="pointer"  onClick={() => this.setState({title:<h2 className="h2">OFFERING THE BEST PIZZA IN LOS ANGELES</h2>,para:<p className="p1">Lotus advenas ducunt ad gemna. Ubi est domesticus domina? Heu, barbatus mens! Cum elogium favere, omnes lubaes tractare talis, barbatus adiuratores. Mirabilis hydras ducunt ad danista. Dominas sunt accentors de germanus cacula. Amicitias prarere in alta muta! Ecce, bubo! Nunquam promissio verpa. Talis, primus fugas recte consumere de audax, festus indictio.Nunquam quaestio scutum.ValebatsLorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>})}>
                    OurMission
                  </a>
                </li>
                <li>
                  <a  data-toggle="pointer"   onClick={() => this.setState({title:<h2 className="h2">PROVIDING TOP-NOTCH CUSTOMER SERVICE</h2>,para:<p className="p1">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.Lotus advenas ducunt ad gemna. Ubi est domesticus domina? Heu, barbatus mens! Cum elogium favere, omnes lubaes tractare talis, barbatus adiuratores. Mirabilis hydras ducunt ad danista. Dominas sunt accentors de germanus cacula. Amicitias prarere in alta muta! Ecce, bubo! Nunquam promissio verpa. Talis, primus fugas recte consumere de audax, festus indictio. Nunquam quaestio scutum. Valebats</p>})}>
                    OurGoals
                  </a>
                </li>
                <li>
                  <a  data-toggle="pointer" onClick={() => this.setState({title:<h2 className="h2">INTEGRITY &DEDICATION</h2>,para:<p className="p1">Albus, dexter particulas grauiter consumere de ferox, bi-color abactus. Impositios studere, tanquam mirabilis hippotoxota. Cur torus manducare? Pol, vox! Cum barcas nocere, omnes specieses contactus Lotus advenas ducunt ad gemna. Ubi est domesticus domina? Heu, barbatus mens! Cum elogium favere, omnes lubaes tractare talis, barbatus adiuratores. Mirabilis hydras ducunt ad danista. Dominas sunt accentors de germanus cacula. Amicitias prarere in alta muta! Ecce, bubo! Nunquam promissio verpa. Talis, primus fugas recte consumere de audax, festus indictio. Nunquam quaestio scutum. Valebats</p>})} >
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
