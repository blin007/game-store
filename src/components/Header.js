import React from 'react'
import '../styles/Header.css'
import SportsEsportsIcon from '@mui/icons-material/SportsEsports'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import SearchBar from './SearchBar'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux' 

function Header() {
    const cart = useSelector((state) => state.cart);

  return (
    <div className="header" >
        <Link to="/" style={{ textDecoration: 'none' }}>
            <motion.div className="header_logo" whileHover={{ scale: 1.05, cursor: 'pointer', textShadow: "0px 0px 8px rgb(255,255,255)" }}>
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
                <motion.span 
                    className="nav_optionOne" 
                    whileHover={{ scale: 1.1, cursor: 'pointer', textShadow: "0px 0px 8px rgb(255,255,255)"}}
                >
                    Welcome Guest
                </motion.span>
                <motion.span 
                    className="nav_optionTwo" 
                    whileHover={{ scale: 1.1, cursor: 'pointer', textShadow: "0px 0px 8px rgb(255,255,255)"}}
                >
                    Login
                </motion.span>
            </div>

            <div className="nav_option">
                <motion.span className="nav_optionOne" whileHover={{ scale: 1.1, cursor: 'pointer', textShadow: "0px 0px 8px rgb(255,255,255)"}}>
                    Your Orders
                </motion.span>
                <motion.span className="nav_optionTwo" whileHover={{ scale: 1.1, cursor: 'pointer', textShadow: "0px 0px 8px rgb(255,255,255)"}}>
                    Wishlist
                </motion.span>               
            </div>

            <Link to="/cart">
                <motion.div className="nav_cart" whileHover={{ scale: 1.1, cursor: 'pointer', textShadow: "0px 0px 8px rgb(255,255,255)"}}>
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