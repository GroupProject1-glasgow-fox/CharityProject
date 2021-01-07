const axios = require('axios')

function movieAPI(req, res, next) {
    const moviePopular = ''

    axios.get(moviePopular)
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
    movieAPI
}