const postgres = require('postgres')
// import postgres from 'postgres'
const pg = require('pg')
const { Client, Pool } = pg;

const db = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false, // Required for Supabase SSL
    },
})

module.exports = db


