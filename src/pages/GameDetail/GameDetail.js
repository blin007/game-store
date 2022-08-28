import React, { useEffect, useState } from 'react'
import '../../styles/GameDetail.css'
import axios from '../../axios'
import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion';
import GameHeader from './components/GameHeader';
import Slideshow from '../Home/components/Slideshow';
import price from '../../utility/price';

function GameDetail({ pageVariants }) {
  const params = useParams();
  const gameId = Number(params.gameId);
  const [game, setGame] = useState({});
  const [screenshots, setScreenshots] = useState({});
  const [gamePrice, setGamePrice] = useState(0);

  // const getStates = () => {
  //   console.log("GAME STATE: ", game);
  //   console.log("SCREEN SHOT STATE: ", screenshots)
  //   console.log("GAME PRICE STATE: ", gamePrice);
  // }   

  useEffect(() => {
    (async () => {
      const res = await axios ({
        method: "GET",
        url: `/game/?id=${gameId}`,
      })
      .catch(error => console.log("ERROR: ", error))

      console.log("res game details: ", res.data.gameDetailsData);
      console.log("res game screen shots: ", res.data.gameScreenShotsData);
      const images = res.data.gameScreenShotsData.results;
      const gameDetails = res.data.gameDetailsData
      const gPrice = price(gameDetails);
      // const gameDetailsImage = gameDetails?.background_image
      setGame(gameDetails)
      setScreenshots(images);
      setGamePrice(gPrice);
      console.log('game: ', game);
      console.log('screen shots: ', screenshots);
      console.log('game price: ', gamePrice)
    })();
    // eslint-disable-next-line
  }, [gameId])

  return (
    <motion.div 
      className="game_detail"
      variants={pageVariants}
      initial={pageVariants?.hidden}
      animate={pageVariants?.visible}
      exit={pageVariants?.exit}
    >
      {game ? (
        <div className="game_container">
          <GameHeader showNavLink={true} game={game} price={gamePrice}/>
          <div className="game_content">
            {/* <button onClick={getStates}>TEST</button> */}
            <div className="game_slideshow">
              <Slideshow featured = {false} screenshots={screenshots}/>
            </div>
            <div className="game_info">
              <div className="game_description">
                <h3>Summary</h3>
                {game.description_raw ? game.description_raw : (
                  <p>No description available</p>
                )}
              </div>

            </div>
          </div>
        </div>     
      ): (
        <p>Loading...</p>
      )} 

    </motion.div>
  )
}

export default GameDetail