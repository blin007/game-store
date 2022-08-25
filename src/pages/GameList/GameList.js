import React, { useEffect, useState } from 'react'
import '../../styles/GameList.css'
import { useSelector, useDispatch } from 'react-redux'
import { clearGames } from '../../features/gameList/gameList';
import GameCard from '../../components/GameCard';
// import { useLocation } from 'react-router-dom'

function GameList() {
    const [list, setList] = useState([]);
    const games = useSelector((state) => state.gameList);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(clearGames())
        setList(games)
        //eslint-disable-next-line
    }, [])

  return (
    <div className="gameList">
        {/* <button onClick={() => console.log("game list: ", games)} style={{width: '500px'}}>Click for game list</button> */}
        <div className="gameList_container">
            <div className="gameList_content">
                {list.map(game => (
                    <GameCard id={game.id} image={game.background_image} title={game.name}/>
                ))}
            </div>
        </div>
    </div>
  )
}

export default GameList