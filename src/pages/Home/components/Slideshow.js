import React, { useState } from 'react'
import '../../../styles/Slideshow.css'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import GameCard from '../../../components/GameCard';
import images from '../../../db/dummyData';
import { motion } from 'framer-motion';




function Slideshow() {

    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const moveSlide = (e, step) => {
        if (step > 0) setDirection(1)
        else setDirection(-1)
        if (step=== 1 && index === images.length - 1){
            setIndex(0);
            return;
        }
        else if (step=== -1 && index === 0) {
            setIndex(images.length - 1);
            return;
        }
        setIndex(index + step)
    }

  return (
    <div className="slideshow_container">
        <div className="slideshow">
            <div className="slideshow_items">
                <GameCard 
                    image={images[index].url} 
                    title= {images[index].title}
                    price= {images[index].price}
                    windows={images[index].windows} 
                    apple={images[index].apple} 
                    xbox={images[index].xbox} 
                    playstation={images[index].playstation}
                    nintendo = {images[index].nintendo} 
                    direction={direction}
                />
            </div>
            <motion.button className="prev_button"
                onClick={e => moveSlide(e, -1)}
                whileHover={{background: "linear-gradient(to right, rgba(255,255,255,0.3) , rgba(0,0,0,0))"}}
            >
                <NavigateBeforeIcon fontSize='large' className="arrow"/>
            </motion.button>
            <motion.button className="next_button"
                onClick={e => moveSlide(e, 1)}
                whileHover={{background: "linear-gradient(to left, rgba(255,255,255,0.3) , rgba(0,0,0,0))"}}
            >
                <NavigateNextIcon fontSize='large' className="arrow"/>
            </motion.button>
        </div>
    </div>

  )
}

export default Slideshow