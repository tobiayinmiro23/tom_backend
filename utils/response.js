// function Response(res, msg, status) {
//     res.json({
//         status,
//         message: msg
//     })
// }


// module.exports = Response

class Response {
    Success(res, msg) {
        res.json({
            status: 'success',
            message: msg
        })
    }

    Error(res, msg) {
        res.json({
            status: 'error',
            message: msg
        })
    }
}

module.exports = new Response()