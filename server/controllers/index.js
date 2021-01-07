class Controller {

    static async register (req, res, next) {
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

    static async login (req, res, next) {
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
                if(verifyPassword(data.password, find.password)){
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

    static async getList (req, res, next) {
        try {
            let user = req.user
            const find = await List.findAll({where: {userId: user.id}})
            res.status(200).json(find)
        } catch (err) {
            next (err)
        }
    }

    static async createList (req, res, next) {
        try {
            const data = {
                userId: req.user.id
            }
            const create = await List.create(data)
            res.status(201).json(create)
        } catch (err) {
            next (err)
        }
    }

    static async getListById (req, res, next) {
        try {
            let id = req.params.id
            const find = List.findByPk(id)
            res.status(200).json(find)
        } catch (err) {
            next (err)
        }
    }

    static async changeStatus (req, res, next) {
        try {
            let data = {
                status: 'done'
            }
            let find = await List.findByPk(id)
            if(!find){
                throw {
                    status: 404,
                    message: "Data not found"
                }
            } else {
                const edit = await List.update(data, {where: {id}, returning: true})
                res.status(200).json(edit[1][0])
            }
        } catch (err) {
            next(err)
        }
    }

    static async deleteList (req, res, next) {
        try {
            let id = req.params.id
            const find = List.findByPk(id)
            if(!find){
                throw {
                    status: 404,
                    message: "Data not found"
                }
            } else {
                const deleted = await List.destroy({where: {id}})
                res.status(200).json("List deleted")
            }
        } catch (err) {
            next (err)
        }
    }

}

module.exports = Controller