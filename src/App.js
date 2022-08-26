//import libraries
import { useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements} from '@stripe/react-stripe-js';
import { useDispatch } from 'react-redux';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import { auth } from './db/firebase';
import { setUser } from './features/user/userSlice';

//import pages
import Header from './components/Header.js'
import Home from './pages/Home/Home.js'
import Purchases from './pages/Purchases/Purchases';
import Cart from './pages/Cart/Cart';
import Login from './pages/Login/Login';
import Checkout from './pages/Checkout/Checkout';
import GameList from './pages/GameList/GameList';
import GameDetail from './pages/GameDetail/GameDetail';

const stripePromise = loadStripe('pk_test_51LYX9LCBkSPfxTAlVxKX4qCiThnCH3rjhDx9vg47PmGJfzOk0nTveHNC0gppAi28LJTcoTdqNXUGAg50G0RXADK300MRqmODYc');

const buttonVariants = {
  hover: {
    scale: 1.1,
    boxShadow: "0 0 20px 0px rgb(1, 7, 27)"
  },
  tap: {
    scale: 0.9
  }
}

const pageVariants = {
  hidden: {
    opacity: 0,
    x:"100vw",
    transition: {
      ease: 'easeInOut', 
      // type: 'tween',
      // delay: 0.5,
      duration: 1
    }
  },
  visible: {
    opacity: 1,
    x: 0,
    // width: "100%",
    transition: {
      // delay: 0.5,
      duration: 0.8,
      // ease: 'linear',
      // type: 'tween'
    }
  },
  exit: {
    opacity: 0,
    x: '-100vh',
    transition: { 
      ease: 'easeInOut', 
      // type: 'tween',
      duration: 0.8,
      staggerChildren: 1,
      // when: 'afterChildren'
    }
  }
}

function App() {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      // console.log("User: ", authUser.email);

      //user logs in
      if (authUser){
        dispatch(setUser({
          email: authUser.email,
          uid: authUser.uid,
        }))
      }
      //user logs out
      else {
        dispatch(setUser({
          email: null,
          uid: null,
        }))
      }
    })
    //eslint-disable-next-line
  }, [])

  //defined router in index.js rather than app.js because otherwise we would not be able to animate routes using the useLocation hook
  return (
      <AnimatePresence initial={false} mode='wait'>
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={[<Header />, <Home pageVariants={pageVariants}/>]}/>
          <Route path="/cart" element={[<Header />, <Cart buttonVariants={buttonVariants} pageVariants={pageVariants}/>]}/>
          <Route path="/login" element={[<Header />, <Login buttonVariants={buttonVariants} pageVariants={pageVariants}/>]} />
          <Route path="/checkout" 
            element={[
              <Header />, 
              <Elements stripe={stripePromise}>
                <Checkout buttonVariants={buttonVariants} pageVariants={pageVariants}/>
              </Elements>]} 
          />
          <Route path="/purchases" element={[<Header />, <Purchases pageVariants={pageVariants}/>]} />
          <Route exact path="/gameList/:search" element={[<Header />, <GameList pageVariants={pageVariants}/>]} />
          <Route exact path="/game/:name" element={[<Header />, <GameDetail pageVariants={pageVariants}/>]}/>
        </Routes>
      </AnimatePresence>
  );
}

export default App;
