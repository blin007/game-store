import React from 'react'
import '../../styles/Cart.css'
import { useSelector } from 'react-redux';
import EstimatedTotal from '../../components/EstimatedTotal';

function Cart() {
  const cart = useSelector((state) => state.cart);

  const cartItems = cart.map(item => (
    <div key={item.id}>
      <p>{item.title}</p>
      <p>{item.price}</p>
      <img src={item.image} alt={item.title} />
    </div>
  ))
  return (
    <div className="cart">
      <h2 className="cart_title">YOUR SHOPPING CART</h2>
      <div className="cart_container">
        
        <div className="cart_left">
          <h2>Items</h2>
          {/* Cart Items */}
        </div>
        <div className="cart_right">
          <EstimatedTotal />
          {/* <h2>Estimated Total ({cart?.length} items): </h2> */}
        </div>
      </div>
    </div>
  )
}

export default Cart