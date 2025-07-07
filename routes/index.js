const express = require('express');
const Router = express.Router()
const userRouter = require('./user')
const commentRouter = require('./comment')

// const commentRouter = require('./comments')

Router.get('/', (req, res) => res.json('we are live'))
Router.use('/comments', commentRouter)
Router.use('/user', userRouter)
// Router.all('/{*any}', (req, res) => console.log('i heard that'))
Router.all('/{*any}', (req, res) => res.json('this endpoint does not exist, confirm endpoint and try again'))

module.exports = Router  