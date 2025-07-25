import React from 'react';
import '../styles/Home.css'
import NavBar from '../components/NavBar';

function Home() {
    return(
        <header>
            <div className='HomeHeader'>
                <ul>
                <li>Track games you've played.</li>
                <li>Add games to your backlog.</li>
                <li>Show the world your favourite games.</li>
                </ul>
                
            </div>
        </header>

    );

}

export default Home;