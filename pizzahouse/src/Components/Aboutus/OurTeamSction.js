import React from 'react'
import Ourteam from './Ourteam'
import yh from '../imgs/Our team photo/Yahia.jpg'
import mz from '../imgs/Our team photo/mzax.jpg'
import kot from '../imgs/Our team photo/koto.jpg'
import bll from '../imgs/Our team photo/bll.jpg'
import mh from '../imgs/Our team photo/moys.jpg'
import './Ourteam.css'
import '../general.css'

function OurTeamSction() {
  return (
    <div className='allteam'>
      <div className="container">
        <Ourteam  img={yh} name="Yehia Salah" rule="Front End"/>
        <Ourteam  img={mz} name="Moataz Essam" rule="Front End"/>
        <Ourteam  img={kot} name="Moahmmed Kotop" rule="Back End"/>
        <Ourteam  img={bll} name="Belal Abd Alnasser" rule="Back End"/>
        <Ourteam  img={mh} name="Moahmmed Youssef Ragab" rule="Back End"/>
        
    </div>
    </div>
  )
}

export default OurTeamSction