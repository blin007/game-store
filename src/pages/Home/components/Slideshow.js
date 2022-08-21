import React from 'react'
import '../../../styles/Slideshow.css'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import GameCard from '../../../components/GameCard';

const images = [
    "https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/capsule_616x353.jpg?t=1654259241",
    "https://cdn.cloudflare.steamstatic.com/steam/apps/1313140/capsule_616x353.jpg?t=1660316311",
    "https://cdn.cloudflare.steamstatic.com/steam/apps/1332010/capsule_616x353.jpg?t=1660855681",
    "https://cdn.cloudflare.steamstatic.com/steam/apps/1817070/capsule_616x353.jpg?t=1660316394",
    "https://cdn.cloudflare.steamstatic.com/steam/apps/1144200/capsule_616x353.jpg?t=1659994097",
]

function Slideshow() {
  return (
    <div className="slideshow_container">
        <div className="slideshow">
            <div className="slideshow_items">
                <GameCard image={images[0]} windows={true} apple={true} xbox={true} playstation={true}/>
            </div>
            <button className="prev_button"><NavigateBeforeIcon fontSize='large' className="arrow"/></button>
            <button className="next_button"><NavigateNextIcon fontSize='large' className="arrow"/></button>
        </div>
    </div>

  )
}

export default Slideshow