import React , {Component} from 'react'
import './cart.css'
import '../general.css'
import Header from '../HomePage/Header/Header'
import Footer from '../HomePage/Footer/Footer'
class Cart extends Component{
  render(){
    return (
      <div className='add-cart'>
        <Header/>
      <div className="cart-shopping">
      <div className="box"></div>
      <div className="buttons">
      <button>Plus</button>
      <button>Minuse</button>
      </div>
      <p>Mohamed write what you want here</p>
      </div>
        <Footer/>
      </div>
    )
  }
}

export default Cart