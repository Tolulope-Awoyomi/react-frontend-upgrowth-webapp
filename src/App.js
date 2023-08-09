import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Navigation from './components/Navigation';

function App() {
  return (
    <>
      <Navigation />
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        
        <Home />
        
    </div>
    </>
    
  );
}

export default App;
