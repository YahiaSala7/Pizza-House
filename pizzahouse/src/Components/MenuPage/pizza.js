import React, { useEffect, useState } from 'react'
import '../general.css'
import Card from '../pruducts/Card'
import '../pruducts/card.css'
import axios from 'axios'
function Pizza({setLoginUser}) {
  const [menu, setmenu] = useState([]); 
  useEffect(() => {
    axios.get("http://localhost:9002/Allpizza").then(res => {
      setmenu(res.data.users);
    })
  });


  const log = menu.map(i => {
    return (
      <>
        <Card img={i.ImgUrl} name={i.nameOfFood} price={`${i.price}$` } setLoginUser={setLoginUser} />
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

export default Pizza