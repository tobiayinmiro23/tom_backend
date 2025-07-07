const cors = require('cors');
const express = require('express');
const router = require('./routes/index')

const app = express()

app.use(cors())
app.use(express.json())
app.use(router)


async function main() {
    console.log('successfully connected to the server')
}
// app.listen(process.env.PORT || 3000,()=>main().catch((err) => console.log(err)))
app.listen(3000, () => main().catch((err) => console.log(err)))