const PostulationModel = require('../models/postulation')
exports.create = async (req, res) => {
    try {
        if (Object.entries(req.body).length == 0) {

            return res.status(400).send({
                message: 'los datos son obligatorios'
            })
        }
        const postulation = new PostulationModel({
            nameRequest: req.body.titlePostulation,            
            dateRequest: req.body.dateRequest,
            statusNotification: req.body.statusNotification,
            messageNotification: req.body.messageNotification
        })
       const dataPostulation = await postulation.save()
        res.send(dataPostulation)
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
}
exports.update = async (req, res) => {
    try{
    if (Object.entries(req.body).length == 0) {

        return res.status(400).send({
            message: 'los datos son obligatorios'
        })
    }
    const postulation = {
        nameRequest: req.body.titlePostulation,       
        dateRequest: req.body.dateRequest,
        statusNotification: req.body.statusNotification,
        messageNotification: req.body.messageNotification
    }
    const psotulationModel = await PostulationModel.findByIdAndUpdate(req.params.id, postulation)
    res.send(postulationUpdate)
} catch (error) {
    res.status(500).send({
        message: error.message
    })
}      
}
exports.getOne = async(req, res) => {
    try{
    const userModel = await UserModel.findById(req.params.id)
        res.send(user)
        }catch(error)  {
            res.status(500).send({
                message: error.message
            })
        }
}
exports.getAll = async(req, res) => {
    try{
    const userModel = await UserModel.find()
        res.send(users)
        }catch(error)  {
            res.status(500).send({
                message: error.message
            })
        }
}