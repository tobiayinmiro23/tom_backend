const db = require('../utils/db')
const Response = require('../utils/response')
const { nanoid } = require('nanoid')



class CommentService {

    async addComment(req, res) {
        const { username, comments, photoid, usersid } = req.body
        let date = new Date()
        try {
            let id = nanoid()
            let newComment = await db.query('insert into comments (username, comments, photoid, usersid, time, id) values ( $1, $2, $3, $4, $5, $6 ) RETURNING *', [username, comments, photoid, usersid, date, id])
            if (newComment.rows[0].id) {
                const allComments = await db.query('select * from comments where photoId = $1', [photoid])
                Response.Success(res, allComments.rows)
            } else Response.Error(res, 'unable to add comment an error occured')
        } catch (error) {
            Response.Error(res, error?.message || 'unable to add comment an error occured')
        }
    }
    async updateComment(req, res) {
        const { comments, commentid, photoid } = req.body
        let date = new Date()
        try {
            const updateComment = await db.query("update comments set comments = $1, time = $2  where id = $3 ", [comments, date, commentid])
            if (updateComment?.rowCount === 0) Response.Error(res, 'an error occured, unable to update comment')
            else {
                const allComments = await db.query('select * from comments where photoId = $1', [photoid])
                Response.Success(res, allComments.rows)
            }
        } catch (error) {
            Response.Error(res, error?.message || 'an error occured')
        }
    }

    async deleteComment(req, res) {
        const { commentid } = req.body
        try {
            const deletedComment = await db.query('delete from comments where id = $1', [commentid])
            if (deletedComment?.rowCount === 0) Response.Error(res, 'an error occured, unable to delete comment')
            else Response.Success(res, 'comment successfully deleted')
        } catch (error) {
            Response.Error(res, error?.message || 'an error occured')
        }
    }
    async getComment(req, res) {
        const photoId = req.params.id
        try {
            const allComments = await db.query('select * from comments where photoId = $1', [photoId])
            Response.Success(res, allComments.rows)
        } catch (error) {
            Response.Error(res, error?.message || 'an error occured')
        }
    }
}
module.exports = new CommentService()