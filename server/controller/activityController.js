const { Activity } = require('../models')


class Controller {
    static async getActivity (req, res, next) {
        try {
            let user = req.user
            const find = await Activity.findAll({where: {UserId: user.id}})
            res.status(200).json(find)
        } catch (err) {
            next (err)
        }
    }

    static async createActivity (req, res, next) {
        try {
            const data = {
                judul: req.body.judul,
                deskripsi: req.body.deskripsi,
                alokasiWaktu: req.body.alokasiWaktu,
                status: 'pending',
                UserId: req.user.id
            }
            const create = await Activity.create(data)
            res.status(201).json(create)
        } catch (err) {
            next (err)
        }
    }

    static async getActivityById (req, res, next) {
        try {
            let id = req.params.id
            const find = await Activity.findByPk(id)
            res.status(200).json(find)
        } catch (err) {
            next (err)
        }
    }

    static async changeStatus (req, res, next) {
        try {
            let data
            let id = req.params.id
            let find = await Activity.findByPk(id)
            if(!find){
                throw {
                    status: 404,
                    message: "Data not found"
                }
            } else {
                if(find.status == 'pending'){
                    data = {
                        status: 'finish'
                    }
                } else {
                    data = {
                        status: 'pending'
                    }
                }
                const edit = await Activity.update(data, {where: {id}, returning: true})
                res.status(200).json(edit[1][0])
            }
        } catch (err) {
            next(err)
        }
    }

    static async deleteActivity (req, res, next) {
        try {
            let id = req.params.id
            const find = Activity.findByPk(id)
            if(!find){
                throw {
                    status: 404,
                    message: "Data not found"
                }
            } else {
                const deleted = await Activity.destroy({where: {id}})
                res.status(200).json("Activity deleted")
            }
        } catch (err) {
            next (err)
        }
    }

    static async editActivityById (req, res, next) {
        try {
            let id = req.params.id
            const data = {
                judul: req.body.judul,
                deskripsi: req.body.deskripsi,
                alokasiWaktu: req.body.alokasiWaktu,
                status: 'pending',
                UserId: req.user.id
            }
            const edit = await Activity.update(data, {where: {id}, returning: true})
            res.status(200).json(edit[1][0])
        } catch (err) {
            next (err)
        }
    }

}

module.exports = Controller