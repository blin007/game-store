import React from 'react'
import '../styles/Header.css'
import { motion } from 'framer-motion'
import SearchIcon from '@mui/icons-material/Search';

function SearchBar() {

    const searchGame = (e) => {

    }

    return (
        <>
            <motion.form
                className="header_search"
                // initial={{ width: 500 }}
                
                // animate={{ maxWidth: 1000 }}
                onSubmit={searchGame}
            >
                <motion.input
                    className="header_search_input" 
                    type="text"
                    placeholder="Search Games..."
                    initial={{width: 500}}
                    whileHover={{ boxShadow: "0px 0px 8px rgb(255,255,255)"}}
                    whileFocus={{ width: 800, backgroundColor: "rgb(83,83,83)"}}
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