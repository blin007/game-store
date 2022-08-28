import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../../styles/Header.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { motion } from 'framer-motion'
import { BsCartPlus, BsCartCheck } from "react-icons/bs";

function GameHeader({ showNavLink, title }) {
  const navigate = useNavigate()
  const [added, setAdded] = useState(false);

  const goBack=(e) => {
    e.preventDefault();
    navigate('/');
  }

  const addCart = () => {

  }

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

  )
}

export default GameHeader