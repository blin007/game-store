import React from 'react'
import '../../../styles/Home.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import axios from '../../../axios'
import { addGames } from '../../../features/gameList/gameList'

function HomeNavbar() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    //search game
    const handleSubmit = async (e, param) => {
        e.preventDefault();

        await axios ({
            method: "GET",
            url: `/list?search=${param}`,
        }).then((response) => {
            console.log('successful axios request: ', response.data.results)

            response.data.results.map(game => (
                dispatch(addGames(game))
            ))

            navigate(`/list/${param}`)
        }).catch(error => console.log(error))
    }

  return (
    <div className="home_navbar">
        <div className="home_navarea">
            <div className="home_navbackground">
                <div className="home_navContent">
                    <div className="tab" onClick={e => handleSubmit(e, 'featured')}>
                        <span className="item">Featured</span>
                    </div>
                    <div className="tab" onClick={e => handleSubmit(e, 'top')}>
                        <span className="item">Top Rated</span>
                    </div>
                    <div className="tab" onClick={e => handleSubmit(e, 'new')}>
                        <span className="item">New Releases</span>
                    </div>
                    <div className="tab" onClick={e => handleSubmit(e, 'multiplayer')}>
                        <span className="item">Multiplayer</span>
                    </div>
                    <div className="tab" onClick={e => handleSubmit(e, 'singleplayer')}>
                        <span className="item">Singleplayer</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeNavbar