import React, { useState } from 'react'
import '../../styles/Login.css'
import { motion } from 'framer-motion'

//anim variants for the text fields
const textFieldVariants = {
    hover: {
        boxShadow: "0px 0px 8px rgb(255,255,255)"
    },
    focus: {
        backgroundColor: "rgb(83,83,83)"
    },
}

function Login({ buttonVariants }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
    }
  return (
    <div className="login">
        <div className="login_container">
            <h1 className="login_title">SIGN IN</h1>

            <form className="login_form">
                <h5>Email</h5>
                <motion.input 
                    className="text_field" 
                    type="text" 
                    variants={textFieldVariants} 
                    whileHover="hover" 
                    whileFocus="focus"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <h5>Password</h5>
                <motion.input 
                    className="text_field" 
                    type="password" 
                    variants={textFieldVariants} 
                    whileHover="hover" 
                    whileFocus="focus"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <motion.button 
                    className="login_button"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    onClick={signIn}
                    type='submit'
                >
                    Sign In
                </motion.button>
            </form>

            <motion.button 
                className="register_button"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                
            >
                Create Account
            </motion.button>
        </div>
    </div>
  )
}

export default Login