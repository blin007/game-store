import React, { useState } from 'react'
import '../styles/Header.css'
import { motion } from 'framer-motion'
import SearchIcon from '@mui/icons-material/Search';
import axios from '../axios'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { addGames } from '../features/gameList/gameList'

function SearchBar() {
    const [gameName, setGameName] = useState('');
    const games = useSelector((state) => state.gameList);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    //search game
    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios ({
            method: "GET",
            url: `/search?game=${gameName}`
        }).then((response) => {
            console.log('successful axios request: ', response.data.results)

            response.data.results.map(game => (
                dispatch(addGames(game))
            ))

            navigate('/gameList')

        }).catch(error => console.log(error))
    }

    return (
        <>
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
        </>
    )
}

export default SearchBar