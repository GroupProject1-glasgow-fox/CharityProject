const bcrypt = require('bcryptjs')

function generatePass(pass) {
    let salt = bcrypt.genSaltSync(5)
    let hash = bcrypt.hashSync(pass, salt)

    return hash
}

function comparePass(pass, hashPass) {
    let compare = bcrypt.compareSync(pass, hashPass)

    return compare
}

module.exports = {
    generatePass,
    comparePass
}

