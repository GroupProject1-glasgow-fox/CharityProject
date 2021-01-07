const {Activity} = require('../models')

module.exports = async (req, res, next) => {
    try {
        let user = req.user
        let activity = await Activity.findByPk(req.params.id)
        if(user.id != activity.UserId){
            throw {
                status: 401,
                message: 'Unauthorized'
            }
        } else {
            next()
        }
    } catch (err) {
        next(err)
    }
}