import express from 'express';
import { getGames, getRatedGames } from '../controllers/gamesController.js';


const router = express.Router();


router.get('/', getGames); // get all games
router.get('/ratedGames', getRatedGames)



export default router;