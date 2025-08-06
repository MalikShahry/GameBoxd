import pg from 'pg';
import dotenv from 'dotenv';
const { Pool, Client } = pg

dotenv.config();

// Pools will use environment variables for connection information
const pool = new Pool({
    user: "postgres",
    password: "password",
    host: 'localhost',
    port: '5432',
    database: 'gameboxd'
});


// connect Client
const client = new Client({
    user: "postgres",
    password: "password",
    host: 'localhost',
    port: '5432',
    database: 'gameboxd'
});

client
    .connect()
    .then(() =>{
        console.log("Connected to PostgreSQL database");
    })
    .catch((err) => {
        console.error("Error connecting to database", err)
    });


export default pool;