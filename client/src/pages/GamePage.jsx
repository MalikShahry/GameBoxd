
import React from "react";
import '../styles/GamePage.css'
import axios from "axios";
import { useState, useEffect } from "react";

function GamePage() {

    const ratedGamesURL = 'api/games/ratedGames';
    const [games, setGames] = useState([]);

    function formatGenres(genresString) {
        if (!genresString || typeof genresString !== "string") return "";

        // Remove leading and trailing curly braces if they exist
        const trimmed = genresString.startsWith("{") && genresString.endsWith("}")
            ? genresString.slice(1, -1)
            : genresString;

        // Now split by comma — this must be a string method
        const genresArray = trimmed.length > 0 ? trimmed.split(",") : [];

        // Map and add quotes
        const quotedGenres = genresArray.map((g) => `"${g.trim()}"`);

        return quotedGenres.join(", ");
        
    }


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
                            <div className='container-img'>
                                <img src={game.background_image} alt={game.title} className="game-image"></img>
                            </div>
                            <div className="game-info">
                                <h3>{game.title}</h3>
                            <div className="extra-game-info">
                                <h4>Release date:  {new Date(game.release_date).toLocaleDateString("en-CA")}</h4>
                                <hr className="line-break" />
                                <h4>Genres: {game.genre.join(', ')}</h4>
                                <hr className="line-break" />
                                <h4>Platforms: {game.platform.join(', ')}</h4>
                                <hr className="line-break" />
                                <h4>Rating: {game.ratings} / 5 ({game.ratings_count})</h4>

                            </div>

                            </div>

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