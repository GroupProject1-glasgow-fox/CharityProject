const axios = require('axios')

function covidUpdate(req, res, next) {

    const dataCovid = 'https://data.covid19.go.id/public/api/update.json'

    axios.get(dataCovid)
    .then(data => {
        if(data) {
            res.status(200).json(data)    
        } else {
            throw {
                status: 401,
                message: "bad Request"
            }
        }
    })
    .catch(err => {
        next(err)
    })

}


module.exports = {
    covidUpdate
}