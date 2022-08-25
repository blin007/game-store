//import libraries
import { useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements} from '@stripe/react-stripe-js';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

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

function App() {
  const dispatch = useDispatch();

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

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={[<Header />, <Home />]}/>
          <Route path="/cart" element={[<Header />, <Cart buttonVariants={buttonVariants}/>]}/>
          <Route path="/login" element={[<Header />, <Login buttonVariants={buttonVariants}/>]} />
          <Route path="/checkout" 
            element={[
              <Header />, 
              <Elements stripe={stripePromise}>
                <Checkout buttonVariants={buttonVariants}/>
              </Elements>]} 
          />
          <Route path="/purchases" element={[<Header />, <Purchases />]} />
          <Route path="/gameList" element={[<Header />, <GameList />]} />
        </Routes>
        
        
      </div>
    </Router>
  );
}

export default App;
