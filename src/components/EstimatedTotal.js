import React from 'react'
import '../styles/EstimatedTotal.css'
import CurrencyFormat from 'react-currency-format'
import { motion } from 'framer-motion';
import { cartTotal } from '../features/cart/cartSlice';

function EstimatedTotal({ cart }) {

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
            <motion.button whileHover={{ scale: 1.1, boxShadow: "0 0 20px 0px rgb(1, 7, 27)"}}
                onClick={() => console.log(cart)}
            >
                Purchase for myself
            </motion.button>
            <motion.button whileHover={{ scale: 1.1, boxShadow: "0 0 20px 0px rgb(1, 7, 27)"}}>
                Purchase as a gift
            </motion.button>
        </div>
    </div>
  )
}

export default EstimatedTotal