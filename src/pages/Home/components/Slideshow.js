import React, { useState, useEffect } from 'react'
import '../../../styles/Slideshow.css'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import GameCard from '../../../components/GameCard';
import images from '../../../db/dummyData';
import { motion, AnimatePresence } from 'framer-motion';

const variants = {
    hidden: direction => {
        return { 
            x: direction > 0 ? 100 : -100,
            opacity: 0,
        }
    },
    visible: {
        x: 0,
        opacity: 1,
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
    exitShow: direction => {
        return {
            x: direction > 0 ? -100 : 100,
            opacity: 0,
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


function Slideshow({ featured, screenshots }) {

    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const len = featured ? images.length : screenshots?.length;

    // console.log("screenshots and index: ", screenshots, index);

    const moveSlide = (step) => {
        if (step > 0) setDirection(1)
        else setDirection(-1)
        if (step=== 1 && index === len - 1){
            setIndex(0);
            return;
        }
        else if (step=== -1 && index === 0) {
            setIndex(len - 1);
            return;
        }
        setIndex((index) => index + step)
    }

    // const setIndexByTime = () => {
    //     setTimeout(() => {
    //         moveSlide(1);
    //     }, 5000);
    // }

    // useEffect(() => {
    //     setIndexByTime();
    // }, [index])

  return (
    <div className="slideshow_container">
        <div className="slideshow">
            <div className="slideshow_items">
                {featured ? (
                    <>
                    <GameCard 
                        featured={true}
                        animVariants = {variants}
                        id = {images[index].id}
                        image={images[index].url} 
                        title= {images[index].title}
                        price= {images[index].price}
                        platforms={images[index].platforms}
                        direction={direction}
                    />
                    <motion.button className="prev_button"
                        onClick={e => moveSlide(-1)}
                        whileHover={{background: "linear-gradient(to right, rgba(255,255,255,0.3) , rgba(0,0,0,0))"}}
                    >
                        <NavigateBeforeIcon fontSize='large' className="arrow"/>
                    </motion.button>
                    <motion.button className="next_button"
                        onClick={e => moveSlide(1)}
                        whileHover={{background: "linear-gradient(to left, rgba(255,255,255,0.3) , rgba(0,0,0,0))"}}
                    >
                        <NavigateNextIcon fontSize='large' className="arrow"/>
                    </motion.button>
                    </>
                ) : (
                    <>
                        <AnimatePresence initial={false} mode="wait" custom={direction}>
                            <motion.img 
                                variants={variants}
                                initial="hidden"
                                animate="visible"
                                exit="exitShow"
                                key={screenshots[index]?.image}
                                custom={direction}

                                src={screenshots[index]?.image}
                                alt=""
                                className="slide_image"
                            />
                        </AnimatePresence>
                        <motion.button className="gamedetail_prev_button"
                            onClick={e => moveSlide(-1)}
                            whileHover={{background: "linear-gradient(to right, rgba(255,255,255,0.3) , rgba(0,0,0,0))"}}
                        >
                            <NavigateBeforeIcon fontSize='large' className="arrow"/>
                        </motion.button>
                        <motion.button className="gamedetail_next_button"
                            onClick={e => moveSlide(1)}
                            whileHover={{background: "linear-gradient(to left, rgba(255,255,255,0.3) , rgba(0,0,0,0))"}}
                        >
                            <NavigateNextIcon fontSize='large' className="arrow"/>
                        </motion.button>
                    </>
                )}

            </div>

        </div>
    </div>

  )
}

export default Slideshow