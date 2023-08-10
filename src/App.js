import { Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Navigation from './components/Navigation';
import Aspects from './containers/Aspects';
import Aspect from './containers/Aspect';

function App() {
  return (
    <>
      <div className="App">
      <Navigation />
        <img src={logo} className="App-logo" alt="logo" />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/aspects" element={<Aspects />} />
          <Route path="/aspects/:id" element={<Aspect />} />
        </Routes>
        
    </div>
    </>
    
  );
}

export default App;
