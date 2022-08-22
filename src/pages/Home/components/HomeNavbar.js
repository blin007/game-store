import React from 'react'
import '../../../styles/Home.css'

function HomeNavbar() {
  return (
    <div className="home_navbar">
        <div className="home_navarea">
            <div className="home_navbackground">
                <div className="home_navContent">
                    <div className="tab">
                        <span className="item">Featured</span>
                    </div>
                    <div className="tab">
                        <span className="item">New Releases</span>
                    </div>
                    <div className="tab">
                        <span className="item">Bestselling</span>
                    </div>
                    <div className="tab">
                        <span className="item">Genres</span>
                    </div>
                    <div className="tab">
                        <span className="item">On Sale</span>
                    </div>
                    <div className="tab">
                        <span className="item">All Games</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeNavbar