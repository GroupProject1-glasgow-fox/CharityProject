const {verifyToken} = require('../helper/jwt')

function authenticate(req, res, next) {
    try {
        if(!req.headers.access_token){
            throw {
                status: 400,
                message: 'Please login'
            }
        } else {
            let decode = verifyToken(req.headers.access_token)
            if(!decode){
                throw {
                    status: 400,
                    message: 'User invalid'
                }
            } else {
                req.user = decode
                next()
            }
        }
    } catch (err) {
        next(err)
    }
}

module.exports = {
    authenticate
}