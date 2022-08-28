import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../../styles/Header.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { motion } from 'framer-motion'
import { BsCartPlus, BsCartCheck } from "react-icons/bs";
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../features/cart/cartSlice'

function GameHeader({ showNavLink, game, price }) {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const [added, setAdded] = useState(false);
  const title = game?.name;
  const gameId = game?.id;
  const image = game?.background_image;

  const goBack=(e) => {
    e.preventDefault();
    navigate('/');
  }

    const addCart = () => {
        setAdded(true);
        dispatch(addToCart({gameId, title, price, image}))
    }

    useEffect(() => {
        setTimeout(() => {
            setAdded(false);
        }, 500)
    }, [added])

  return (
    <div className="game_header_container">
      <nav className="game_header">
        {showNavLink && (
          <div>
            <motion.button
              className="nav_button"
              whileHover={{scale: 1.2, textShadow: "0px 0px 8px rgb(255,255,255)", cursor: 'pointer'}}
              whileTap={{scale: 1}}
              onClick={e => goBack(e)}
            > 
              <ArrowBackIcon /><span>Home</span>
            </motion.button>
          </div>
        )}
        {title && (
          <h2>{title}</h2>
        )}
      </nav>
      <div className="game_header_info">
        <h4>${price}</h4>
        <motion.div 
          className="game_cart"
          whileHover={{scale: 1.2, textShadow: "0px 0px 8px rgb(255,255,255)", cursor: 'pointer'}}
          whileTap={{scale: 1}}
          onClick={addCart}
        >
          <h3>Add to Cart</h3>
          <button 
              className="game_add_cart_button"
          > 
              {!added && <BsCartPlus size={20}/> }
              {added && <BsCartCheck size={20} />}
          </button>
        </motion.div>
      </div>
    </div>

  )
}

export default GameHeader