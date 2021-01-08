const { User } = require('../models')
const { comparePass } = require('../helper/bcrypt')
const { generateToken } = require('../helper/jwt')
const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client(process.env.CLIENT_ID);


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

    static googleLogin(req, res, next) {
        let payload

        client.verifyIdToken({
            idToken : req.body.googleToken,
            audience : process.env.GOOGLE_CLIENT_ID
        })
        .then(ticket => {
            payload = ticket.getPayload()
            
            return User.findOne({ where : 
                { email : payload.email }
            })
        })
        .then(user => {
            if(user) {
                return user
            } else {
                return User.create({ 
                    email : payload.email,
                    password : Math.random()*1000 + 'rahasia password selalu terjaga'
                })
            }
        })
        .then(user => {
            const access_token = generateToken({
                id : user.id,
                email : user.email
            })

            res.status(200).json({
                access_token
            })
        })
        .catch(err => {
            console.log(err)
            next(err)
        })
        
    }
}

module.exports = Controller

// console.log(dataClient)