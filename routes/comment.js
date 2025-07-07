const express = require('express');
const commentController = require('../controller/commentController');
const commentRouter = express.Router()

commentRouter.post('/', commentController.addCommentController)
commentRouter.delete('/', commentController.deleteCommentController)
commentRouter.put('/', commentController.updateCommentController)
commentRouter.get('/:id', commentController.getCommentController)

module.exports = commentRouter