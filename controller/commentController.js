const CommentService = require("../service/comments")
const Response = require("../utils/response")

class CommentController {
    async addCommentController(req, res) {
        let reply = await CommentService.addComment(req, res)
        return reply
    }
    async updateCommentController(req, res) {
        let reply = await CommentService.updateComment(req, res)
        return reply
    }
    async deleteCommentController(req, res) {
        let reply = await CommentService.deleteComment(req, res)
        return reply
    }
    async getCommentController(req, res) {
        let reply = await CommentService.getComment(req, res)
        return reply
    }
}
module.exports = new CommentController()
