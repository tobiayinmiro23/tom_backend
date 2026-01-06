const express = require('express');
const userRouter = express.Router()
const UserController = require('../controller/userController')

userRouter.post('/login', UserController.loginController)
userRouter.post('/signin', UserController.signinController)

module.exports = userRouter