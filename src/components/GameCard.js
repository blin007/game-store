//import icons
import { FaWindows, FaApple, FaXbox, FaPlaystation } from 'react-icons/fa'
import { TbDeviceNintendo } from 'react-icons/tb'
import { BsCartPlus, BsCartCheck } from "react-icons/bs";

import React, { useEffect, useState } from 'react'
import '../styles/GameCard.css'
import { AnimatePresence, motion } from 'framer-motion'
import { useDispatch } from 'react-redux'
import { addToCart } from '../features/cart/cartSlice'
import { useNavigate } from 'react-router-dom'

function GameCard({ featured, animVariants, id, image, title, price, platforms, direction }) {
    const [added, setAdded] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        navigate(`/game/${id}`)
    }

    const addCart = () => {
        setAdded(true);
        dispatch(addToCart({id, title, price, image}))
    }

    useEffect(() => {
        setTimeout(() => {
            setAdded(false);
        }, 500)
    }, [added])

    return (

        <AnimatePresence initial={false} mode="wait" custom={direction} >
            {/* Only load game cards that have an image to show */}
            {image && (
                <motion.div 
                    onClick={e => handleClick(e)}
                    className={featured ? "card" : "search_card"}
                    whileHover={{cursor: 'pointer', boxShadow: "0 0 20px 0px rgb(1, 7, 27)", scale: 1.01}}    
                    variants={animVariants}
                    initial= {animVariants?.hidden}
                    animate= {animVariants?.visible}
                    exit= {animVariants?.exitShow}
                    key={image}
                    custom={direction}
                >
                    <img 
                        src={image} 
                        alt="slide" 
                        id="img"
                        className={featured ? 'slide' : 'game'}
                    />
                    <div id="slide_info" className={featured ? "slide_info" : "search_info"}>
                        <span className={featured ? "game_title" : "card_title"}>{title}</span>
                        
                        <motion.button 
                            className="add_cart"
                            whileHover={{scale: 1.5, textShadow: "0px 0px 8px rgb(255,255,255)"}}
                            whileTap={{scale: 1}}
                            onClick={addCart}
                        > 
                            {!added && <BsCartPlus size={20}/> }
                            {added && <BsCartCheck size={20} />}
                        </motion.button>
                        
                        <span>Available Now!</span>
                        <span>Top Seller!</span>
                        <div className="game_price">{price}</div>
                        <div className="platforms">
                            {platforms?.windows && (<FaWindows className="platform" />)}
                            {platforms?.apple && (<FaApple className="platform"/>)}
                            {platforms?.xbox && (<FaXbox className="platform"/>)}
                            {platforms?.playstation && (<FaPlaystation className="platform"/>)}
                            {platforms?.nintendo && (<TbDeviceNintendo className="platform" />)}
                        </div>
                    </div>   

                </motion.div>           
            )}

        </AnimatePresence>
    )
}

export default GameCard