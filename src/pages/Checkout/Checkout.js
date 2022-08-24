import React from 'react'
import { useSelector } from 'react-redux'
import '../../styles/Checkout.css'
import CartItem from '../Cart/components/CartItem'

function Checkout() {
    const cart = useSelector((state) => state.cart)

  return (
    <div className="checkout">
        <div className="checkout_container">
            
            <div className="checkout_content_left">
                {/* Items */}
                <div className="checkout_section">
                    <div className="checkout_items">
                        {cart.map(item => (
                            <CartItem cartItem={item} />
                        ))}
                    </div>
                </div>
                
                {/* Payment method */}
                <div className="checkout_section">
                    <div className="payment_details">
                        <h3>Payment details will be here</h3>
                    </div>
                </div>
            </div>
            <div className="checkout_content_right">
                <div className="checkout_section">
                    {/* Subtotal */}
                    <div className="subtotal">
                        <h3>Subtotal will be here</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Checkout