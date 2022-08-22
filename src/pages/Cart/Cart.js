import React from 'react'
import { useSelector } from 'react-redux';

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
      <h2>Cart Items</h2>
      {cartItems}
    </div>
  )
}

export default Cart