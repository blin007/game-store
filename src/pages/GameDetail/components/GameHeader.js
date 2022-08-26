import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../../../styles/Header.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function GameHeader({ showNavLink, title }) {
  const navigate = useNavigate()

  const goBack=(e) => {
    e.preventDefault();
    navigate('/');
  }

  return (
    <nav className="game_header">
      {showNavLink && (
        <div>
          <button
            className="nav_button"
            onClick={e => goBack(e)}
          > 
            <ArrowBackIcon />Home
          </button>
        </div>
      )}
        {title && (
          <h2>{title}</h2>
        )}
    </nav>
  )
}

export default GameHeader