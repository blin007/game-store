import React from 'react'
import '../styles/GameCard.css'
import { motion } from 'framer-motion';
import { FaWindows, FaApple, FaXbox, FaPlaystation} from 'react-icons/fa';

function GameCard({ image, title, price, windows, apple, xbox, playstation }) {
  return (
    <motion.div 
        className="card"
        whileHover={{cursor: 'pointer'}}    
    >
        <img src={image} alt="slide" className="slide" />
        <div className="slide_info">
            <span className="game_title">ELDEN RING</span>
            <span>Available Now!</span>
            <span>Top Seller!</span>
            <div className="game_price">$59.99</div>
            <div className="platforms">
                {windows && (<FaWindows className="platform" />)}
                {apple && (<FaApple className="platform"/>)}
                {xbox && (<FaXbox className="platform"/>)}
                {playstation && (<FaPlaystation className="platform"/>)}
            </div>
        </div>   

    </motion.div>

  )
}

export default GameCard