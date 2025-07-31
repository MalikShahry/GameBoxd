import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';

import Home from './pages/Home';
import Profile from './pages/Profile.jsx';
import GamePage from './pages/GamePage.jsx';
import Login from './pages/Login.jsx';
import CreateAccount from './pages/CreateAccount.jsx';
import GameLists from './pages/GameLists.jsx';


import NavBar from './components/NavBar.jsx';
import {Route, Routes} from 'react-router-dom';

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
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/createAccount' element={<CreateAccount/>}></Route>
          <Route path='/games' element={<GamePage/>}></Route>
          <Route path='/lists' element={<GameLists/>}></Route>
          <Route path='/profile' element={<Profile/>}></Route>
        </Routes>
    
    
      </header>
    </div>
  );
}

export default App;
