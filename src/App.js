import './styles/App.css';
import Header from './components/Header.js'
import Home from './pages/Home/Home.js'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={[<Header />, <Home />]}/>
          <Route path="/cart" element={[<Header />]}/>
        </Routes>
        
        
      </div>
    </Router>
  );
}

export default App;
