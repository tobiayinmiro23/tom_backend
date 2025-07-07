const UserService = require("../service/user")
const Response = require("../utils/response")

class UserController {
    async signinController(req, res) {
        let reply = await UserService.signin(req, res)
        return reply
    }
    async loginController(req, res) {
        let reply = await UserService.login(req, res)
        return reply
    }
}

module.exports = new UserController()
