const PostulationModel =require('../models/postulation') 
 exports.create = (req, res) => {
    if (Object.entries(req.body).length == 0) {

       return res.status(400).send({
          message: 'los datos son obligatorios'
      })
    }
    const postulation = new PostulationModel({
        nameRequest: req.body.titlePostulation,
        idRequest:  req.body.idRequest,
        dateRequest:  req.body. dateRequest,
        statusNotification: req.body.statusNotification,
        messageNotification: req.body.messageNotification
    })
    postulation.save()
        .then((dataPostulation) => { res.send(dataPostulation) })
        .catch((error) => {
            res.status(500).send({
                message: error.message
            })
        })
}
 exports.update=(req,res)=>{
       if (Object.entries(req.body).length == 0) {

        return res.status(400).send({
            message: 'los datos son obligatorios'
        })
    }
    const postulation= {
        nameRequest: req.body.titlePostulation,
        idRequest:  req.body.idRequest,
        dateRequest:  req.body. dateRequest,
        statusNotification: req.body.statusNotification,
        messageNotification: req.body.messageNotification
 }
 PostulationModel.findByIdAndUpdate(req.params.id, postulation)
        .then(
            (postulationUpdate) => {
                res.send(postulationUpdate)
            }
        ).catch(
            (error) => {
                res.status(500).send({
                    message: error.message
                })
            }
        )
}
exports.getOne = (req, res) => {    
    UserModel.findById(req.params.id)       
        .then((user) => {
            res.send(user)
        })
        .catch((error) => {
            res.status(500).send({
                message: error.message
            })
        })
}
exports.getAll = (req, res) => {
    UserModel.find()
        .then((users) => {
            res.send(users)
        })
        .catch((error) => {
            res.status(500).send({
                message: error.message
            })
        })
}