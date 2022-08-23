import React from 'react'
import '../styles/Header.css'
import SportsEsportsIcon from '@mui/icons-material/SportsEsports'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import SearchBar from './SearchBar'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux' 

const headerVariants = {
    hover: {
        scale: 1.1,
        cursor: 'pointer',
        textShadow: "0px 0px 8px rgb(255,255,255)",
    },
}

function Header() {
    const cart = useSelector((state) => state.cart);

  return (
    <div className="header" >
        <Link to="/" className='nav_link'>
            <motion.div 
                className="header_logo" 
                variants={headerVariants}
                whileHover="hover"
                >
                <SportsEsportsIcon 
                    className="header_logo_icon"
                    fontSize='large' 
                />
                <h1 >GAME STORE</h1>
            </motion.div>
        </Link>

        <SearchBar />

        <div className="header_navbar">
            <div className="nav_option">
                <span 
                    className="nav_optionOne" 
                >
                    Welcome Guest
                </span>
                <Link to="/login" className='nav_link'>
                    <motion.div 
                        className="nav_optionTwo"
                        variants={headerVariants} 
                        whileHover="hover"
                    >
                        <span>Login</span>
                    </motion.div>
                </Link>
            </div>

            <div className="nav_option">
                <motion.span 
                    className="nav_optionOne" 
                    variants={headerVariants}
                    whileHover="hover"
                >
                    Your Orders
                </motion.span>
                <motion.span 
                    className="nav_optionTwo" 
                    variants={headerVariants}
                    whileHover="hover"
                >
                    Wishlist
                </motion.span>               
            </div>

            <Link to="/cart" className='nav_link'>
                <motion.div 
                    className="nav_cart" 
                    variants={headerVariants}
                    whileHover="hover"
                >
                    <ShoppingCartIcon />
                    <span className="nav_optionTwo">Cart</span>
                    <span className="nav_optionTwo nav_cartCount">{cart?.length}</span>
                </motion.div>
            </Link>
        </div>
    </div>
  )
}

export default Header