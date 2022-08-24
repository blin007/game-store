import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import '../../styles/Checkout.css'
import CartItem from '../Cart/components/CartItem'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import CurrencyFormat from 'react-currency-format'
import { cartTotal } from '../../features/cart/cartSlice'
import { motion } from 'framer-motion'

function Checkout({ buttonVariants }) {
    const cart = useSelector((state) => state.cart)
    const user = useSelector((state) => state.user)
    const [processing, setProcessing] = useState("")
    const [successful, setSuccessful] = useState(false)
    const [error, setError] = useState(null)
    const [disabled, setDisabled] = useState(true)

    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setProcessing(true);


    }

    const handleChange = (e) => {
        setDisabled(e.empty)
        setError(e.error ? e.error.message: "")
    }

  return (
    <div className="checkout">
        <div className="checkout_container">
            
            <div className="checkout_content_left">
                
                <div className="checkout_items">
                    {cart.map(item => (
                        <CartItem cartItem={item} />
                    ))}
                </div>

                <div className="checkout_section">
                    <div className="payment_title">
                        <p className="account_detail">Account:</p>
                        <p>Payment method:</p>
                        
                    </div>
                    <div className="payment_details">
                        <p>{user.email ? user.email : "Guest"}</p>
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={e => handleChange(e)}/>
                            <motion.button 
                                type="submit"
                                disabled={processing || disabled || successful}
                                variants={buttonVariants}
                                whileHover="hover"
                                whileTap="tap"
                            >
                                <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                            </motion.button>
                        </form>
                        
                    </div>
                </div>
            </div>
            <div className="checkout_content_right">
                <div className="checkout_section">
                    <div className="subtotal">
                        <div className="price_container">
                            <CurrencyFormat 
                                renderText={(value) => (
                                    <>
                                        <h5>Subtotal {value}</h5>
                                    </>
                                )}
                                decimalScale={2}
                                value={cartTotal(cart)}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"$"}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Checkout