import React from 'react'
import { useDispatch } from 'react-redux'
import { delFromCart } from '../../../features/cart/cartSlice';
import '../../../styles/CartItem.css'
import { motion } from 'framer-motion'

function CartItem({ cartItem, buttonVariants, removeButtons }) {
    const dispatch = useDispatch();

    const removeFromCart = () => {
        dispatch(delFromCart(cartItem.id))
    }

  return (
    <motion.div className="cart_item" variants={buttonVariants} whileHover="hover">
        <img 
            src={cartItem.image}
            alt={cartItem.title}
            className="cart_item_img"
        />
        <div className="cart_item_info">
            <p className="cart_item_title">{cartItem.title}</p>
            <p className="cart_item_price">
                <small>$</small>    
                <strong>{cartItem.price}</strong>
            </p>
            
        </div>
        {removeButtons && (
            <div className="remove_button_container">
                <motion.button 
                    onClick={removeFromCart}
                    variants={buttonVariants}
                    whileTap="tap"
                    whileHover="hover"
                >
                    Remove from Cart
                </motion.button>
            </div>
        )}

        
    </motion.div>
  )
}

export default CartItem