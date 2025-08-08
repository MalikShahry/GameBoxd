
import React from "react";
import '../styles/GamePage.css'
import axios from "axios";
import { useState, useEffect } from "react";

function GamePage() {

    const ratedGamesURL = 'api/games/ratedGames';
    const [games, setGames] = useState([]);


    /*
    useEffect(() => {
    fetch('/api/games')
    .then(res => res.json())
    .then(data => setGames(data))
    .catch(err => console.error(err));
    }, []);
    */

    useEffect(() => {
    axios.get(ratedGamesURL)
        .then(response => {
        setGames(response.data);

        })
        .catch(error => {
        console.error(error);
        });
    }, []);

    

    return(
        <div>

            <section className="filters">
                <h3>BROWSE BY</h3>

                <ul className= 'nav-bar-filters'>
                    <li>YEAR</li>
                    <li>RATING</li>
                    <li>GENRE</li>
                    <li>PLATFORM</li>

                </ul>

            </section>

            <section className="games-grid">
                <ul className="games-poster">
                    {games.map((game) => (
                     <li key ={game.id} className='poster-item'>
                        <div className="game-container">
                            <h3>{game.title}</h3>

                        </div>

                     </li>   
                    ))}

                </ul>


            </section>

            <div class='page-numbers'>
                <h4>page 1, 2</h4>

            </div>
        </div>

    );

}

export default GamePage;