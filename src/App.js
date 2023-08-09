import { Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Navigation from './components/Navigation';

function App() {
  return (
    <>
      <div className="App">
      <Navigation />
        <img src={logo} className="App-logo" alt="logo" />
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route path="/aspects" element={Aspect} /> */}
        </Routes>
        
    </div>
    </>
    
  );
}

export default App;
