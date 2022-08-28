import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../../styles/Checkout.css'
import CartItem from '../Cart/components/CartItem'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import CurrencyFormat from 'react-currency-format'
import { cartTotal, clearCart } from '../../features/cart/cartSlice'
import { motion } from 'framer-motion'
import axios from '../../axios'
import { useNavigate } from 'react-router-dom'
import { db } from '../../db/firebase'
import createUID from '../../utility/createGuestUID'

function Checkout({ buttonVariants, pageVariants }) {
    const cart = useSelector((state) => state.cart)
    const user = useSelector((state) => state.user)
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [processing, setProcessing] = useState("")
    const [successful, setSuccessful] = useState(false)
    const [error, setError] = useState(null)
    const [submitError, setSubmitError] = useState(false);
    const [disabled, setDisabled] = useState(true)
    const [clientSecret, setClientSecret] = useState(true);

    const stripe = useStripe();
    const elements = useElements();

    useEffect(() => {
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                url: `/checkout/create?total=${cartTotal(cart) * 100}` //must be in currency subunit
            })
            setClientSecret(response.data.clientSecret)
        }

        getClientSecret();
    }, [cart])

    console.log('THE SECRET IS: ', clientSecret);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setProcessing(true);
        // if (user.email === null || user.uid === null){
        //     user.uid = createUID()
        // }

        await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            //payment has succeeded so add the purchase to the firebase store db

            console.log('user: ', user);
            db.collection('users').doc(user.uid ? user.uid : createUID()).collection('purchases').doc(paymentIntent.id).set({
                cart: cart,
                amount: paymentIntent.amount,
                created: paymentIntent.created,
            })

            setSuccessful(true);
            setError(null);
            setProcessing(false);

            dispatch(clearCart());

            if (user.email === null || user.uid === null){
                navigate('/purchases', { replace: true })
            }
            else {
                navigate('/', {replace: true})
            }
            
        }).catch(error => setSubmitError(true))
    }

    const handleChange = (e) => {
        setDisabled(e.empty)
        setError(e.error ? e.error.message: "")
        console.log('error: ', error);
    }

  return (
    <motion.div 
        className="checkout"
        variants={pageVariants}
        initial={pageVariants?.hidden}
        animate={pageVariants?.visible}
        exit={pageVariants?.exit}
    >
        <div className="checkout_container">
            
            <div className="checkout_content_left">
                
                <div className="checkout_items">
                    {cart.map(item => (
                        <CartItem cartItem={item} buttonVariants={buttonVariants} removeButtons={true} />
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
                            <CardElement onChange={e => handleChange(e)} options={{
                                style: {
                                    base: {
                                        color: '#FFF'
                                    }
                                }
                            }}/>
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
                {submitError && (
                    <p className="submission_error">Error has occurred on payment processing</p>
                )}
                {!user.email && (
                    <p className="submission_error">Log in to see purchase history</p>
                )}
            </div>
        </div>
    </motion.div>
  )
}

export default Checkout