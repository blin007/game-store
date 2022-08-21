import React from 'react'
import '../../styles/Home.css'
import HomeNavbar from './components/HomeNavbar'
import Slideshow from './components/Slideshow'


function Home() {
  return (
    <div className="home">
        <HomeNavbar />

        <img 
            className="home_banner_top"
            src="https://cdn.cloudflare.steamstatic.com/steam/clusters/frontpage/9aeb2c71424deef0062b0449/page_bg_english.jpg?t=1660348764"
            alt=""
        />
        
        <div className="home_content_container">
          <div className="home_content">
            <h3 className="content_title">FEATURED</h3>
            <Slideshow />
          </div>
        </div>
    </div>
  )
}

export default Home