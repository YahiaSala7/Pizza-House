import React from 'react'
import '../../general.css'
import './gallery.css'
import g1 from '../../imgs/Gallery/gallery-1-310x585.jpg'
import g2 from '../../imgs/Gallery/gallery-2-631x587.jpg'
import g3 from '../../imgs/Gallery/gallery-3-311x289.jpg'
import g4 from '../../imgs/Gallery/gallery-4-631x289.jpg'
import g5 from '../../imgs/Gallery/gallery-5-311x289.jpg'
import g6 from '../../imgs/Gallery/gallery-6-311x289.jpg'
import g7 from '../../imgs/Gallery/gallery-7-311x289.jpg'
function Gallery() {
  return (
    <div className='gallary'>
    <div className="box one">
        <img src={g1} alt="" />
        <img src={g2} alt="" />
    </div>
    <div className="box two">
    <img src={g3} alt="" />
    <img src={g4} alt="" className='p2'/>
    <img src={g5} alt="" />
    <img src={g6} alt="" />
    <img src={g7} alt="" />
    </div>

    </div>
  )
}

export default Gallery