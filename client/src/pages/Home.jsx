import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Home.css'
import backgroundImage from '../assets/nightreign.webp'


function Home() {
    
    const API_KEY = '843f0e17e8164a86acbbff609402c1fb';
    const getGamesURL = `https://api.rawg.io/api/games?key=${API_KEY}`;

    const getRatedGamesURL = "/api/games/ratedGames";

    const [games, setFeaturedGames] = useState([]);


    // Pull from RAWG API, return the first 5 games from the RAWG db
    useEffect(() => {
    axios.get(getRatedGamesURL)
        .then(response => {
        const data = response.data;

        // Get specific items: 3rd, 7th, and 10th
        const selectedGames = [data[3], data[4], data[5], data[11], data[10]];

        setFeaturedGames(selectedGames);
        console.log(selectedGames);
        })
        .catch(error => {
        console.error(error);
        });
    }, []);


    return(
        <div class='home'>
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

            <div class="create-account">
                <a href='/createAccount'>
                    <button class='create-account-button'>Get started - it's free!</button>
                </a>

            </div>

           <section className='Featured'>
                <ul className='poster'>
                    {games.map((game) => (
                    <li key={game.id} className='poster-item'>
                        <div class='poster-container'>
                            <img src={game.background_image} alt={game.title} className='poster-image' />
                            <p className='poster-title'>{game.title}</p>
                        
                            <div class='featured-ratings'>
                                <ul class='game-meta'>
                                    <li class="game-ratings">
                                        <span class='rating'>Rating: </span>
                                        <strong>⭐{game.ratings} / 5.00</strong>
                                    </li>

                                </ul>
                            </div>

                        </div>
                    </li>
                    ))}
                </ul>
            </section>

            <section class="highlights">
                <h2>GameBoxd lets you...</h2>

                <div class="highlight-grid">
                    <div class="highlight-card">
                    <span class="icon">🎮</span>
                    <p>Keep track of every game you've ever played</p>
                    </div>

                    <div class="highlight-card">
                    <span class="icon">❤️</span>
                    <p>Show some love for your favourite games, lists, and reviews with a "like"</p>
                    </div>

                    <div class="highlight-card">
                    <span class="icon">⭐</span>
                    <p>Rate games on a five-star scale to record and share your reaction</p>
                    </div>

                    <div class="highlight-card">
                    <span class="icon">📅</span>
                    <p>Keep a backlog of the games you are dying to play</p>
                    </div>

                    <div class="highlight-card">
                    <span class="icon">📝</span>
                    <p>Write reviews and share your opinions with friends</p>
                    </div>

                    <div class="highlight-card">
                    <span class="icon">📊</span>
                    <p>Track your stats and gaming history over time</p>
                    </div>
                </div>
            </section>

            <div class="get-started">
                <h2>Start your gaming journey now...</h2>
                <a href='/createAccount'>
                    <button class='create-account-button'>Create your account</button>
                </a>

            </div>



        </div>

    );

}

export default Home;