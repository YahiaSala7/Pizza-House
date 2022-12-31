import React ,{useState}from 'react'
import '../general.css'
import './card.css'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
function Card(props) {
  const [User,setUser] = useState(props.setLoginUser);
  const [menu,setMenu] = useState(props.name);
  const add=(e)=>{
    setUser(prevState =>[...User,{Orderitem:{nameOfFood:menu}}])
    User.Orderitem.push({nameOfFood:menu})
    console.log(User);
    console.log(menu);
    axios.patch("http://localhost:9002/updateUserItem/"+User.name,User).then(res=>{
      alert(res.data.massege);
    })
  }
  return (
<div className='card-product'>
<div className="face">
<img src={props.img} alt="" />
  <p>{props.name}</p>
  <span>{props.price}</span>
</div>
<div className="buttons" >
    <NavLink to="/AddtoCart"  onClick={add}>Add to cart</NavLink>
    <a href="/#Table"  >buy</a>
</div>
    </div>
  )
}

export default Card