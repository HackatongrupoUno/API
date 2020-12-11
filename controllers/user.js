const UserModel = require('../models/user');
exports.create = (req, res) => {
    try {
    if (Object.entries(req.body).length == 0) {

        return res.status(400).send({
            message: 'Los datos son obligatorios.'
        })
    }
    const user = new UserModel({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        phone: req.body.phone
    })
    users = await user.save()
        res.send(dataUser)
    } catch (error)  {
        res.status(500).send({
            message: error.message
        })
    }
}
exports.update = (req, res) => {
    try {
        if (Object.entries(req.body).length == 0) {

            return res.status(400).send({
                message: 'Los datos son obligatorios.'
            })
        }
        const user = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            password: req.body.password,
            email: req.body.email,
            phone: req.body.phone
        }
        userModel = await UserModel.findByIdAndUpdate(req.params.id, user)
        res.send(userUpdate)
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
}
exports.getAll = (req, res) => {
    try {
    userModel = await UserModel.find()
        res.send(users)
        } catch (error)  {
            res.status(500).send({
                message: error.message
            })
        }
}
exports.getOne = (req, res) => {
    try {
        userModel = await UserModel.findById(req.params.id)
        res.send(user)
        } catch (error)  {
            res.status(500).send({
                message: error.message
            })
        }
}
exports.deleteOne = (req, res) => {
    try {
        userModel = await UserModel.findByIdAndRemove(req.params.id)
        res.send(userdelete)
        } catch (error)  {
            res.status(500).send({
                message: error.message
            })
        }
}
exports.login = (req, res) => {
    UserModel.findOne({ email: req.body.email }, (error, dataUser) => {
        if (dataUser != null) {
            if (dataUser.password == req.body.password) {
                res.send({ token: service.createToken(dataUser) })
            } else {
                res.status(400).send({
                    message: 'Los datos no coinciden'
                })
            }
        } else {
            res.status(400).send({
                message: 'Los datos no coinciden'
            })
        }
    })
}