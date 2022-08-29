import React from 'react'
import '../../styles/Home.css'
import HomeNavbar from './components/HomeNavbar'
import Slideshow from './components/Slideshow'
import { motion } from 'framer-motion'
import image from '../../assets/bg1.png'


function Home({ pageVariants }) {
  return (
    <motion.div 
      className="home"
      variants={pageVariants}
      initial={pageVariants?.hidden}
      animate={pageVariants?.visible}
      exit={pageVariants?.exit}
    >
        <HomeNavbar />

        <img 
            className="home_banner_top"
            src={image}
            alt=""
        />
        
        <div className="home_content_container">
          <div className="home_content">
            <h3 className="content_title">FEATURED TOP SELLERS</h3>
            <Slideshow featured={true}/>
          </div>
        </div>
    </motion.div>
  )
}

export default Home