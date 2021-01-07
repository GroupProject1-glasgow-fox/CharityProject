const { User } = require('../models')
const { comparePass } = require('../helper/bcrypt')
const { generateToken } = require('../helper/jwt')


class Controller {
    static async login(req, res, next) {
        try {
            let data = {
                email: req.body.email,
                password: req.body.password
            }
            const find = await User.findOne({where: {email: data.email}})
            if(!find){
                throw {
                    status: 400,
                    message: "Email/Password Invalid"
                }
            } else {
                if(comparePass(data.password, find.password)){
                    let access_token = generateToken({id: find.id, email: find.email})
                    res.status(200).json({access_token})
                } else {
                    throw {
                        status: 400,
                        message: "Email/Password Invalid"
                    }
                }
            }
        } catch (err) {
            next (err)
        }
    }

    static async register(req, res, next) {
        try {
            let data = {
                email: req.body.email,
                password: req.body.password
            }
            const user = await User.create(data)
            res.status(201).json({id: user.id, email: user.email})
        } catch (err) {
            next (err)
        }
    }

    static googleRegister(req, res, next) {

    }
}

module.exports = Controller