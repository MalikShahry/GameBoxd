import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Home.css'
import backgroundImage from '../assets/nightreign.webp'


function Home() {
    
    const API_KEY = '843f0e17e8164a86acbbff609402c1fb';
    const getGamesURL = `https://api.rawg.io/api/games?key=${API_KEY}`;

    const [games, setFeaturedGames] = useState([]);


    // Pull from RAWG API, return the first 5 games from the RAWG db
 
    useEffect(() => {
        axios.get(getGamesURL)
        .then(response => {
            setFeaturedGames(response.data.results.slice(0,5));
        })
        .catch(error => {
            console.error(error)
        });
    }, []);

    return(

        <div>

            <div class='BackDrop'>
                
                <img src={backgroundImage} alt='background'/>

            </div>

            <div className='HomeHeader'>
                    <h2>
                    Track games you've played.
                    <br/>
                    Add games to your backlog.
                    <br/>
                    Show the world your favourite games.
                    </h2>              
                </div>

           <section className='Featured'>
                <ul className='poster'>
                    {games.map((game) => (
                    <li key={game.id} className='poster-item'>
                        <img src={game.background_image} alt={game.name} className='poster-image' />
                        <p className='poster-title'>{game.name}</p>
                    </li>
                    ))}
                </ul>
            </section>
        </div>

    );

}

export default Home;