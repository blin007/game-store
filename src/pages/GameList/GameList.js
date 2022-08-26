import React, { useEffect, useState } from 'react'
import '../../styles/GameList.css'
import { useSelector, useDispatch } from 'react-redux'
import { clearGames } from '../../features/gameList/gameList';
import GameCard from '../../components/GameCard';
import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

function GameList({ pageVariants }) {
    const [list, setList] = useState([]);
    const games = useSelector((state) => state.gameList);
    const location = useLocation();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(clearGames())
        setList(games)
        //eslint-disable-next-line
    }, [location.pathname])

  return (
    <motion.div 
        className="gameList"
        variants={pageVariants}
        initial={pageVariants?.hidden}
        animate={pageVariants?.visible}
        exit={pageVariants?.exit}
    >
        {/* <button onClick={() => console.log("game list: ", games)} style={{width: '500px'}}>Click for game list</button> */}
        <div className="gameList_container">
            <div className="gameList_content">
                {list.map(game => (
                    <GameCard id={game.id} image={game.background_image} title={game.name}/>
                ))}
            </div>
        </div>
    </motion.div>
  )
}

export default GameList