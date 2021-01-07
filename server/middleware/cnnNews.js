const axios = require('axios')

function cnnNews(req, res, next) {

    const breakingNews = 'https://www.news.developeridn.com/'

    axios.get(breakingNews)
    .then(data => {
        if(data) {
            res.status(200).json(data)
        } else {
            throw {
                status : 401,
                message : 'bad request'
            }
        }
        
    })
    .catch(err => {
        next(err)
    })
}

module.exports = {
    cnnNews
}

// console.log(cnnNews)