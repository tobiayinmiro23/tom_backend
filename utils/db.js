const pg = require('pg')
const { Client } = pg;

const db = new Client({
    ssl: true,
    connectionString: process.env.DATABASE_URL

})
db.connect()
module.exports = db
