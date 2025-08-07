
import express from 'express';
import { getAllGames } from '../models/gamesModel.js';
import { getHighestRatedGames } from '../models/gamesModel.js';


export async function getGames(req, res) {
    try {
        const games = await getAllGames();
        res.status(200).json(games)

    } catch (error) {
        console.error(error);
        res.status(500).json({message: error.message});
    }
    
}

export async function getRatedGames(req, res) {
    try {
        const ratedGames = await getHighestRatedGames();
        res.status(200).json(ratedGames)
    } catch (error) {
        console.error(error);
        res.status(500).json({message: error.message})
    }
}

/*
export async function getSpecificGame(req, res) {
    return null
}
    */