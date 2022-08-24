import React from 'react'
import { useSelector } from 'react-redux'
import '../../styles/Checkout.css'
import CartItem from '../Cart/components/CartItem'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'

function Checkout() {
    const cart = useSelector((state) => state.cart)
    const user = useSelector((state) => state.user)

    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = (e) => {

    }

    const handleChange = (e) => {

    }

  return (
    <div className="checkout">
        <div className="checkout_container">
            
            <div className="checkout_content_left">
                <div className="checkout_section">
                    <div className="checkout_items">
                        {cart.map(item => (
                            <CartItem cartItem={item} />
                        ))}
                    </div>
                </div>
                <div className="checkout_section">
                    <div className="payment_title">
                        <p>Payment method:</p>
                        <p className="account_detail">Account:</p>
                    </div>
                    <div className="payment_details">
                        
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange}/>
                        </form>
                        <p>{user.email ? user.email : "Guest"}</p>
                    </div>
                </div>
            </div>
            <div className="checkout_content_right">
                <div className="checkout_section">
                    <div className="subtotal">
                        <p>Subtotal will be here</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Checkout