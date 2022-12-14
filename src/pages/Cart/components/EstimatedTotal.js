import React from 'react'
import '../../../styles/EstimatedTotal.css'
import CurrencyFormat from 'react-currency-format'
import { motion } from 'framer-motion';
import { cartTotal } from '../../../features/cart/cartSlice'
import { useNavigate } from 'react-router-dom'

function EstimatedTotal({ cart, buttonVariants }) {
    const navigate = useNavigate();

  return (
    <div className="total">
        <CurrencyFormat 
            renderText={(value) => (
                <>
                    <p>
                        Estimated Total ({cart?.length} items): <strong>{value}</strong>
                    </p>
                </>
            )}
            decimalScale={2}
            value={cartTotal(cart)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
        />

        <div className="cart_buttons">
            <motion.button 
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                onClick={() => navigate('/checkout')}
            >
                Purchase for myself
            </motion.button>
            <motion.button 
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                onClick={() => navigate('/checkout')}
            >
                Purchase as a gift
            </motion.button>
        </div>
    </div>
  )
}

export default EstimatedTotal