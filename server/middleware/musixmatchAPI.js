const axios = require('axios')

function musixMatchPlay(req, res, next) {
    const musicPlay = ''

    axios.get(musicPlay)
    .then(data => {
        if(data) {
            res.status(200).json(data)
        } else {
            throw {
                status : 401,
                message : 'Bad request'
            }
        }
    })
    .catch(err => {
        next(err)
    })
}

module.exports = {
    musixMatchPlay
}