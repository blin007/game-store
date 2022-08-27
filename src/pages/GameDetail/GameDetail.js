import React, { useEffect, useState } from 'react'
import '../../styles/GameDetail.css'
import axios from '../../axios'
import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion';
import GameHeader from './components/GameHeader';
import Slideshow from '../Home/components/Slideshow';

function GameDetail() {
  const params = useParams();
  const gameId = Number(params.gameId);
  const [game, setGame] = useState({
    // id: 0,
    // name: "",
    // description: "",

  });
  const [screenshots, setScreenshots] = useState({
    // results: []
  });


  const getStates = () => {
    console.log("GAME STATE: ", game);
    console.log("SCREEN SHOT STATE: ", screenshots)
  }   

  useEffect(() => {
    (async () => {
      const res = await axios ({
        method: "GET",
        url: `/game/?id=${gameId}`,
      }).
      // then (response => {
      //     console.log("successful axios response: ", response);
      // }).
      
      catch(error => console.log("ERROR: ", error))

      console.log("res game details: ", res.data.gameDetailsData);
      console.log("res game screen shots: ", res.data.gameScreenShotsData);
      // const images = res.data.gameScreenShotsData.results;
      // const gameDetails = res.data.gameDetailsData
      setGame(res.data.gameDetailsData)
      setScreenshots(res.data.gameScreenShotsData.results);
      console.log('game: ', game);
      console.log('screen shots: ', screenshots);
    })();

  }, [gameId])

  return (
    <div className="game_detail">
      <GameHeader showNavLink={true} title={game?.name}/>
      <div className="game_container">
        <button onClick={getStates}>TEST</button>
        {/* <Slideshow featured = {false} screenshots={screenshots?.results}/> */}
      </div>
    </div>
  )
}

export default GameDetail