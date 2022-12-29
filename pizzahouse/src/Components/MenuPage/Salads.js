import React, { useEffect, useState } from 'react'
import '../general.css'
import Card from '../pruducts/Card'
import axios from 'axios'
import '../pruducts/card.css'
function Salads() {
  const [menu, setmenu] = useState([]); 
  useEffect(() => {
    axios.get("http://localhost:9002/AllSalads").then(res => {
      setmenu(res.data.users);
    })
  });


  const log = menu.map(i => {
    return (
      <>
        <Card img={i.ImgUrl} name={i.nameOfFood} price={`${i.price}$`} />
      </>
      )
  })
  return (
    <div className='cardpage'>
      <div className="container">
        {log}
      </div>
    </div>
  )
}

export default Salads