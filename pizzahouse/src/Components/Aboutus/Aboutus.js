import React, { Component } from 'react';
import Header from '../HomePage/Header/Header';
import Land from './land/land';
 import Paragraph from './paragraph/paragraph';
//import Paragraph from './paragraph/paragraph';
 import Leftparagraoh from './paragraph/leftparagraoh';
 //import Paragraph from './paragraph/paragraph';
 //import Leftparagraoh from './paragraph/leftparagraoh';
import Ourteam from './paragraph/Ourteam';
import Review from './review/Review'
import yh from '../imgs/Our team photo/3al2.jpg'
import mz from '../imgs/Our team photo/mzax.jpg'
import kot from '../imgs/Our team photo/koto.jpg'
import bll from '../imgs/Our team photo/bll.jpg'
import mh from '../imgs/Our team photo/moys.jpg'
import './paragraph/Ourteam.css';
import './review/reviwers.css'
import Reviwers from './review/reviwers';
import  kk from '../imgs/Gallery/gallery-2-631x587.jpg';
import Footer from '../HomePage/Footer/Footer';
import './Aboutsus.css'

class Aboutus extends Component {
  render() {
    return (
      <div>
        <Header />
        <Land title="About Us"/>   
        <Paragraph />
        <div className='ourteams'>
        <h1>Our Team :</h1>
        <div className='container'>
        <Ourteam  img={yh} name="Yehia Salah" rule="Front End"/>
        <Ourteam  img={mz} name="Moataz Essam" rule="Front End"/>
        <Ourteam  img={kot} name="Moahmmed Kotop" rule="Back End"/>
        <Ourteam  img={bll} name="Belal Abd Alnasser" rule="Back End"/>
        <Ourteam  img={mh} name="Moahmmed Youssef Ragab" rule="Back End"/>
    
</div>
</div>
<div className='footer'>
<Footer/>
</div>
{/* <Review />
<div className='reviewersland'>
<Reviwers name='jack atlas' review='alclmascddasvnjskkvjskdv sm nskjs nslk njksnjknsjkn jks nk' img={kk} />
<Reviwers name='mahmoud' review='alclmascddasvnjskkvjskdv sm' img={mz}/>
<Reviwers name='jack atlas' review='alclmascddasvnjskkvjskdv sm nskjs nslk njksnjknsjkn jks nkvvhvbnnvbnvbnvbnvnbvbn'  img={yh} />
<Reviwers name='jack atlas' review='alclmn jks nk'  img={bll}/>

</div> */}

      </div>
    )
  }
}

export default Aboutus
