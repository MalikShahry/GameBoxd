import pg from 'pg';
import dotenv from 'dotenv';
const { Pool, Client } = pg

dotenv.config();

// Pools will use environment variables for connection information
const client = new Client({
    user: "postgres",
    password: "password",
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DATABASE_URL
});

client
    .connect()
    .then(() =>{
        console.log("Connected to PostgreSQL database");
    })
    .catch((err) => {
        console.error("Error connecting to database", err)
    });
    