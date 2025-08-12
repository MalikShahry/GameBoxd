
import React from "react";
import '../styles/GamePage.css'
import axios from "axios";
import { useState, useEffect } from "react";
import Pagination from "../components/Pagination";

function GamePage() {

    
    const [games, setGames] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [gamesPerPage, setGamesPerPage] = useState(48);


    const ratedGamesURL = 'api/games/ratedGames';

    const lastGameIndex = currentPage * gamesPerPage
    const firstGameIndex = lastGameIndex - gamesPerPage;

    


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


    const currentGames = games.slice(firstGameIndex, lastGameIndex);


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
                    {currentGames.map((game) => (
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

            <div class='pagination'>
                
                    <Pagination
                    gamesPerPage={gamesPerPage}
                    totalGames={games.length}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    />

            </div>
        </div>

    );

}






export default GamePage;