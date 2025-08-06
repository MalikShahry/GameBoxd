import axios from 'axios';
import pool from './db.js';

const RAWG_API_KEY = '843f0e17e8164a86acbbff609402c1fb';
const PAGE_SIZE = 40;
const TOTAL_GAMES_TO_FETCH = 5000;
const MAX_PAGES = Math.ceil(TOTAL_GAMES_TO_FETCH/PAGE_SIZE);


// Utility function to pause execution for given milliseconds (used for rate limiting)
async function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Function to fetch games from RAWG API
async function fetchGames(page) {
    const url = `https://api.rawg.io/api/games`
    try {
        const response = await axios.get(url, {
      params: {
        key: RAWG_API_KEY,
        page: page,
        page_size: PAGE_SIZE, // You can adjust this
      },
    });

    console.log("Successfully retrieved games")

    return response.data.results

    } catch (error) {
        throw new Error(`Failed to fetch page ${page}: ${error.message}`)
    }
}

// Insert or update a single game record in your PostgreSQL database
async function insertGame(game) {
  // Format platforms as a comma-separated string (e.g. "PC, Xbox One")
  // Platforms and genres as arrays
    const platforms = game.platforms?.map(p => p.platform.name) || [];
    const genres = game.genres?.map(g => g.name) || [];


  // Extract ESRB rating if it exists, otherwise null
  const esrb = game.esrb_rating ? game.esrb_rating.name : null;

  // SQL query with ON CONFLICT clause to insert or update based on primary key (game id)
  const query = `
    INSERT INTO games (id, title, platform, release_date, genre, ratings, ratings_count, metacritic, esrb_rating, background_image)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
    ON CONFLICT (id) DO UPDATE SET
      title = EXCLUDED.title,
      platform = EXCLUDED.platform,
      release_date = EXCLUDED.release_date,
      genre = EXCLUDED.genre,
      ratings = EXCLUDED.ratings,
      ratings_count = EXCLUDED.ratings_count,
      metacritic = EXCLUDED.metacritic,
      esrb_rating = EXCLUDED.esrb_rating,
      background_image = EXCLUDED.background_image;
  `;

  // Values array corresponding to query placeholders
  const values = [
    game.id,                // Game ID (primary key)
    game.name,              // Title
    platforms,              // Platforms string
    game.released,          // Release date (ISO string)
    genres,                 // Genres string
    game.rating,            // Average rating (float)
    game.ratings_count,     // Number of ratings (integer)
    game.metacritic,        // Metacritic score (integer)
    esrb,                   // ESRB rating (string or null)
    game.background_image,  // URL of background image
  ];

  // Execute the query with parameterized values to avoid SQL injection
  await pool.query(query, values);
}

// Main function to orchestrate fetching multiple pages and inserting into DB
async function main() {
  for (let page = 1; page <= MAX_PAGES; page++) {
    try {
      console.log(`Fetching page ${page} of ${MAX_PAGES}`);

      // Fetch one page of games from RAWG API
      const games = await fetchGames(page);

      // Loop through each game and insert/update in the database
      for (const game of games) {
        await insertGame(game);
        console.log(`Inserted/Updated game: ${game.name}`);
      }

      // Pause between API requests to avoid hitting rate limits (adjust delay as necessary)
      await delay(1000); // Wait 1 second before next page

    } catch (error) {
      // Log errors and stop fetching further pages if any request or DB operation fails
      console.error('Error:', error);
      break;
    }
  }

  // Close the PostgreSQL connection pool after all operations complete
  console.log('Done inserting games');
  await pool.end();
}

// Run the main function
main();