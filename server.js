const cors = require('cors');
const express = require('express');
const router = require('./routes/index')
const db = require('./utils/db.js')
const app = express()

const allowedOrigins = [
  "https://theopenmarket.netlify.app",
  "https://dev-tobi.netlify.app",
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);
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
