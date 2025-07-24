import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';
import Home from './pages/Home';

function App() {
// Fetch hello from the server side
  useEffect(() => {
    fetch('http://localhost:8080/api/hello')
    .then(res => res.json())
    .then(data => console.log(data));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Home/>
    
        <a
          className="App-link"
          href="https://github.com/MalikShahry/GameBoxd.git"
          target="_blank"
          rel="noopener noreferrer"
        >
          GameBoxd
        </a>
      </header>
    </div>
  );
}

export default App;
