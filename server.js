const cors = require('cors');
const express = require('express');
const router = require('./routes/index')
const db = require('./utils/db.js')
const app = express()

app.use(cors())
// app.use(cors({origin:""}))
app.use(express.json())
app.use(router)

async function testConnection() {
    try {
        await db.connect()
    } catch (err) {
        console.error('Connection error unable to connect to supabase', err);
    }
}

async function main() {
    console.log('successfully connected to the server')
    testConnection();
}
app.listen(process.env.PORT || 3000, () => main().catch((err) => console.log(err)))