import React , {Component} from 'react'
import './cart.css'
import '../general.css'
class Cart extends Component{
  render(){
    return (
      <div>
        <p>your item you order</p>
        <input type='button' value='plus'/>
        <input type='button' value='min'/>
      </div>
    )
  }
}

export default Cart