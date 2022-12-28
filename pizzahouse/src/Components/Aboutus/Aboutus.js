import React, { Component, useState } from "react"
import "./aboutus.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHelicopter } from '@fortawesome/free-solid-svg-icons';
import { faPizzaSlice } from '@fortawesome/free-solid-svg-icons';
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faLeaf } from '@fortawesome/free-solid-svg-icons';
import yh from './imgs/Our team photo/3al2.jpg'
import mz from './imgs/Our team photo/mzax.jpg'
import kot from './imgs/Our team photo/koto.jpg'
import bll from './imgs/Our team photo/bll.jpg'
import mh from './imgs/Our team photo/moys.jpg'
import Ourteam from './Ourteam';
import Opinion from "./Opinion";
class Aboutus extends Component {
    constructor(){
        
        super();
   this.state={title:'A FEW WORDS ABOUT US',para:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit ametconsectetur.'}
}
render() {
    return (
      <div>
        <div className="containerr">
        <a href="#" id="ui-to-top" class="ui-to-top mdi mdi-arrow-up active">  <FontAwesomeIcon icon={faArrowUp} className='up'></FontAwesomeIcon></a>
          <div className="title">
            <h1>About us</h1>
          </div>
          <div className="paragraph">
            <div className="para">
            <h1 className="h1">{this.state.title}</h1>
            <p className="p1">{this.state.para}</p>
            <img src="https://livedemo00.template-help.com/wt_51689/images/about-1-835x418.jpg" alt="" width="100%" height='50vh' ></img>
            </div>
            <div className="sidebar">
              <h5>10+ years of experience</h5>
              <ul className="list">
                <li >
                  
                  <a  data-toggle="tab"  onClick={() => this.setState({title:<h1 className="h1">A FEW WORDS ABOUT US</h1>,para:<p className="p1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit ametconsectetur.</p>})}>
                    AboutUs
    
                  </a>
                </li>
                <li>
                  <a  data-toggle="pointer"  onClick={() => this.setState({title:<h1 className="h1">OFFERING THE BEST PIZZA IN LOS ANGELES</h1>,para:<p className="p1">Lotus advenas ducunt ad gemna. Ubi est domesticus domina? Heu, barbatus mens! Cum elogium favere, omnes lubaes tractare talis, barbatus adiuratores. Mirabilis hydras ducunt ad danista. Dominas sunt accentors de germanus cacula. Amicitias prarere in alta muta! Ecce, bubo! Nunquam promissio verpa. Talis, primus fugas recte consumere de audax, festus indictio.Nunquam quaestio scutum.ValebatsLorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>})}>
                    OurMission
                  </a>
                </li>
                <li>
                  <a  data-toggle="pointer"   onClick={() => this.setState({title:<h1 className="h1">PROVIDING TOP-NOTCH CUSTOMER SERVICE</h1>,para:<p className="p1">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.Lotus advenas ducunt ad gemna. Ubi est domesticus domina? Heu, barbatus mens! Cum elogium favere, omnes lubaes tractare talis, barbatus adiuratores. Mirabilis hydras ducunt ad danista. Dominas sunt accentors de germanus cacula. Amicitias prarere in alta muta! Ecce, bubo! Nunquam promissio verpa. Talis, primus fugas recte consumere de audax, festus indictio. Nunquam quaestio scutum. Valebats</p>})}>
                    OurGoals
                  </a>
                </li>
                <li>
                  <a  data-toggle="pointer" onClick={() => this.setState({title:<h1 className="h1">INTEGRITY &DEDICATION</h1>,para:<p className="p1">Albus, dexter particulas grauiter consumere de ferox, bi-color abactus. Impositios studere, tanquam mirabilis hippotoxota. Cur torus manducare? Pol, vox! Cum barcas nocere, omnes specieses contactus Lotus advenas ducunt ad gemna. Ubi est domesticus domina? Heu, barbatus mens! Cum elogium favere, omnes lubaes tractare talis, barbatus adiuratores. Mirabilis hydras ducunt ad danista. Dominas sunt accentors de germanus cacula. Amicitias prarere in alta muta! Ecce, bubo! Nunquam promissio verpa. Talis, primus fugas recte consumere de audax, festus indictio. Nunquam quaestio scutum. Valebats</p>})} >
                    OurValues
                  </a>
                </li>
              </ul>
              <button className="button  glow-on-hover">Contact US</button>
            </div>
          </div>
          <div className="ourfeatures">
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
      <div className="teamheadder"> 
      <h1>Our Team :</h1>
      </div>
        <div className='teammembers'>
        <Ourteam  img={yh} name="Yehia Salah" rule="Front End"/>
        <Ourteam  img={mz} name="Moataz Essam" rule="Front End"/>
        <Ourteam  img={kot} name="Moahmmed Kotop" rule="Back End"/>
        <Ourteam  img={bll} name="Belal Abd Alnasser" rule="Back End"/>
        <Ourteam  img={mh} name="Moahmmed Youssef Ragab" rule="Back End"/>
    
</div>
<div className="ourhistory">
<img alt="" src="https://livedemo00.template-help.com/wt_51689/images/our_history-1110x710.jpg"></img>
<div className="text">
        <h1>OUR HISTORY</h1>
        <h3>Partnering with Organic Farms Located in California</h3>
        <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.</p>
        <div className="d0"></div>
    </div>
</div>
{/* <div className="opinios">
  <img className="leftimg" src="https://livedemo00.template-help.com/wt_51689/images/our_history-1110x710.jpg"></img>
  <div className="optext">
  <h2>What People Say </h2>
  < Opinion comment='Gluten, fluctus, et galatae. Germanus classiss ducunt ad brodium. Pol, a bene cedrium. Tabess unda in neuter avenio! Orexiss sunt adelphiss de rusticus parma.' name='moataz essam' position='normal customer' img={mz}/>
</div>
</div> */}
        </div>
      </div>
    );
  }
}

export default Aboutus;
