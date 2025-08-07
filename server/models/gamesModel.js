
import express from 'express';
import pool from '../db.js'

// Function to retrieve all games from DB
export async function getAllGames() {
    const result = await pool.query(
        "SELECT * from games LIMIT 100"
    );

    return result.rows;
}

// Function to get highest rated games from DB
export async function getHighestRatedGames() {
    const result = await pool.query(
        "SELECT * FROM games ORDER BY games.ratings DESC LIMIT 50"
    );

    return result.rows;
}

// Function to retrieve game by id
export async function getGameById(id) {
  const result = await pool.query(
    'SELECT * FROM games WHERE id = $1',
    [id]
  );

  return result.rows;
}
