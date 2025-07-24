import React from 'react';
import '../styles/Home.css'
import NavBar from '../components/NavBar';

function Home() {
    return(
        <header className='HomeHeader'>
            <NavBar></NavBar>
            <p>
          <p>Track games you've played.</p>
          <p>Add games to your backlog.</p>
          <p>Show the world your favourite games.</p>
            </p>
            
            

        </header>

    );

}

export default Home;