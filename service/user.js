const db = require('../utils/db')
const bcrypt = require("bcryptjs");
const hashPassword = require('../utils/hash')
const Response = require('../utils/response')
const { nanoid } = require('nanoid')


class UserService {
    async signin(req, res) {
        const { username, password } = req.body
        try {
            // check if username already exists
            const verifyUser = await db.query('select * from users where username = $1', [username])
            if (verifyUser.rows[0]?.id) Response.Error(res, 'user already exists')
            else {
                // create id, hash password and add user if username does not already exist
                let id = nanoid()
                let hash = hashPassword(password)
                let newUser = await db.query('insert into users (username, password, id) values ($1, $2, $3) RETURNING *', [username, hash, id])
                if (newUser.rows[0]?.id) Response.Success(res, 'user successfully created')
                else Response.Error(res, 'error, unable to create account')
            }
        } catch (error) {
            Response.Error(res, error?.message || 'unable to create account, an error occured')
        }
    }
    async login(req, res) {
        const { username, password } = req.body
        try {
            const verifyUser = await db.query('select * from users where username = $1', [username])
            // return error if user does not exist
            if (!verifyUser.rows[0]?.id) Response.Error(res, 'invalid credentials')
            else {
                let verifyPassword = bcrypt.compareSync(password, verifyUser.rows[0].password)
                if (!verifyPassword) Response.Error(res, 'invalid credentials')
                else {
                    let data = {
                        id: verifyUser.rows[0].id,
                        username: verifyUser.rows[0].username,
                    }
                    Response.Success(res, data)
                }
            }
        } catch (error) {
            return Response.Error(res, error?.message || 'unable to login, an error occured please try again later')
        }
    }

}
module.exports = new UserService()
