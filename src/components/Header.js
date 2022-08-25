import React from 'react'
import '../styles/Header.css'
import SportsEsportsIcon from '@mui/icons-material/SportsEsports'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import SearchBar from './SearchBar'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux' 
import { auth } from '../db/firebase'
import { loadProgressBar } from 'axios-progress-bar'
// import axios from '../axios'
// import 'axios-progress-bar/dist/nprogress.css'

const headerVariants = {
    hover: {
        scale: 1.1,
        cursor: 'pointer',
        textShadow: "0px 0px 8px rgb(255,255,255)",
    },
}

function Header() {
    const cart = useSelector((state) => state.cart);
    const user = useSelector((state) => state.user);

    const handleAuthentication = () => {
        console.log(user)
        if (user) {
            auth.signOut();
        }
    }

    // loadProgressBar(axios);

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
                <span className="nav_optionOne" >
                    {/* Display user name in header if signed in, otherwise display "guest" */}
                    Welcome {user.email ? user?.email.split('@')[0] : "Guest"}
                </span>
                {/* Only go to login page if not signed in */}
                <Link to={!user.email && "/login"} className='nav_link'>
                    <motion.div 
                        className="nav_optionTwo"
                        variants={headerVariants} 
                        whileHover="hover"
                        onClick={handleAuthentication}
                    >
                        <span>{user.email ? "Log out" : "Login"}</span>
                    </motion.div>
                </Link>
            </div>

            <div className="nav_option">
                <Link to="/purchases" className="nav_link">
                    <motion.span 
                        className="nav_optionOne" 
                        variants={headerVariants}
                        whileHover="hover"
                    >
                        Your Orders
                    </motion.span>
                </Link>
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