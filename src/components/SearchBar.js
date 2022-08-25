import React, { useEffect, useState } from 'react'
import '../styles/Header.css'
import { motion } from 'framer-motion'
import SearchIcon from '@mui/icons-material/Search';
import axios from '../axios'
import { useNavigate, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { addGames } from '../features/gameList/gameList'
// import Progress from './Progress';
// import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

function SearchBar() {
    const [gameName, setGameName] = useState('');
    // const [progress, setProgress] = useState(0);
    const games = useSelector((state) => state.gameList);
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();

    //search game
    const handleSubmit = async (e) => {
        if (e){
            e.preventDefault();
        }
        
        await axios ({
            method: "GET",
            url: `/search?game=${gameName}`,
            // onDownloadProgress: (progressEvent) => {
            //     let percentCompleted = Math.round(progressEvent.loaded * 100 / progressEvent.total )
            //     setProgress(percentCompleted);
            //     console.log('progress: ', progress);
            // }
        }).then((response) => {
            console.log('successful axios request: ', response.data.results)

            response.data.results.map(game => (
                dispatch(addGames(game))
            ))

            if (location.pathname !== '/gameList'){
                navigate('/gameList')
            }
            
            // setProgress(0);
        }).catch(error => console.log(error))
    }

    // useEffect(() => {
    //     handleSubmit();
        //eslint-disable-next-line
    // },[location.key])

    // useEffect(() )

    return (
        <>{location.pathname !== '/gameList' ? (
            <div className="search_container">
                <motion.form
                    className="header_search"
                    onSubmit={handleSubmit}
                >
                    <motion.input
                        className="header_search_input" 
                        type="text"
                        placeholder="Search Games..."
                        initial={{width: 500}}
                        whileHover={{ boxShadow: "0px 0px 8px rgb(255,255,255)"}}
                        whileFocus={{ width: 800, backgroundColor: "rgb(83,83,83)"}}
                        onChange={e => setGameName(e.target.value)}
                    />
                    <motion.button 
                        type="submit"
                        whileHover={{ scale: 1.15, cursor: 'pointer' }}
                    >
                        <SearchIcon className="header_search_icon"/>
                    </motion.button>              
                </motion.form>
                {/* {progress > 0 &&(
                    <div style={{width: 50, height: 50, marginLeft: 20}}>
                        <CircularProgressbar value={progress} text={`${progress}%`}/>
                    </div>
                ) } */}
  
            </div>
        ) : (
            <div className="search_result_title">
                <span>Search Results for: {gameName}</span>
            </div>
        )}

        </>
    )
}

export default SearchBar