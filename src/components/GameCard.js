import React from 'react'
import '../styles/GameCard.css'
import { AnimatePresence, motion } from 'framer-motion';
import { FaWindows, FaApple, FaXbox, FaPlaystation} from 'react-icons/fa';

const variants = {
    hidden: direction => {
        return { 
            x: direction > 0 ? 500 : -500,
            opacity: 0,
            scale: 0.5,
        }
    },
    visible: {
        x: 0,
        opacity: 1,
        scale: 1,
        transition: {
            x: {
                type: 'spring',
                stiffness: 300,
                damping: 30,
                duration: 0.01
            },
            opacity: {
                duration: .1,
            }
        }
    },
    exit: direction => {
        return {
            x: direction > 0 ? -300 : 300,
            opacity: 0,
            scale: 0.5,
            transition: {
                x: {
                    type: 'spring',
                    stiffness: 300,
                    damping: 30,
                    duration: 0.01,
                },
                opacity: {
                    duration: .2,
                }
            }
        }
    }
}

function GameCard({ image, title, price, windows, apple, xbox, playstation, direction }) {
  return (
    <AnimatePresence initial={false} mode="wait" custom={direction}>
        <motion.div 
            className="card"
            whileHover={{cursor: 'pointer', boxShadow: "0 0 20px 0px rgb(1, 7, 27)"}}    
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="exit"
            key={image}
            custom={direction}
        >
            <img 
                src={image} 
                alt="slide" 
                id="img"
                className="slide" 
            />
            <div id="slide_info" className="slide_info">
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
    </AnimatePresence>
  )
}

export default GameCard