import React from 'react'
import '../../styles/Cart.css'
import { useDispatch, useSelector } from 'react-redux';
import EstimatedTotal from '../../components/EstimatedTotal';
import CartItem from '../../components/CartItem';
import { useNavigate } from 'react-router-dom';
import { clearCart } from '../../features/cart/cartSlice';
import { motion } from 'framer-motion';

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const removeAllItems = () => {
    dispatch(clearCart())
  }

  return (
    <div className="cart">
      <h2 className="cart_title">YOUR SHOPPING CART</h2>
      <div className="cart_container">
        
        <div className="cart_left">
          <div className="cart_items">
            {cart.map((item, i) => (
              <CartItem cartItem={item} />
            ))}

            <div className="button_container">
              {cart?.length > 0 && (
                <motion.button 
                  className="continue_button" 
                  onClick={() => navigate('/')}
                  whileHover = {{scale: 1.1,}}
                  whileTap={{scale: 0.9}}
                >
                  Continue Shopping
                </motion.button>
              )}
              {cart?.length > 0 && (
                <motion.button 
                  className="remove_all_button" 
                  onClick={removeAllItems}
                  initial={{textDecoration: "underline", color: "rgb(255,255,255)"}}
                  whileHover={{ textDecoration: "none", color:"rgb(209, 53, 42)"}}
                >
                  Remove All Items
                </motion.button>
              )}
            </div>
          </div>

        </div>
        <div className="cart_right">
          <EstimatedTotal cart={cart}/>
        </div>
      </div>
    </div>
  )
}

export default Cart