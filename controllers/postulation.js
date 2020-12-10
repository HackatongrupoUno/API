const PostulationModel =require('../models/postulation') 
exports.create = (req, res) => {
    if (Object.entries(req.body).length == 0) {

       return res.status(400).send({
          message: 'los datos son obligatorios'
      })
    }
    const postulation = new PostulationModel({
        titlePostulation: req.body.titlePostulation,
        description:  req.body.description,
        position:  req.body.position,
        salary: req.body.salary,
        language:req.body.language
    })
    postulation.save()
        .then((dataPostulation) => { res.send(dataPostulation) })
        .catch((error) => {
            res.status(500) - send({
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
        titlePostulation: req.body.titlePostulation,
        description:  req.body.description,
        position:  req.body.position,
        salary: req.body.salary,
        language:req.body.language
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
