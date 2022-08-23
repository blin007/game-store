import './styles/App.css';
import Header from './components/Header.js'
import Home from './pages/Home/Home.js'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Cart from './pages/Cart/Cart';
import Login from './pages/Login/Login';
import { useEffect } from 'react';
import { auth } from './db/firebase';

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

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("User: ", authUser);

      //user logs in
      if (authUser){

      }
      //user logs out
      else {
        
      }
    })
  }, [])

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={[<Header />, <Home />]}/>
          <Route path="/cart" element={[<Header />, <Cart buttonVariants={buttonVariants}/>]}/>
          <Route path="/login" element={[<Header />, <Login buttonVariants={buttonVariants}/>]} />
        </Routes>
        
        
      </div>
    </Router>
  );
}

export default App;
