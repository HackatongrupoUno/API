const OfferModel = require('../models/offer');
exports.create = (req, res) => {
    if (Object.entries(req.body).length == 0) {
        
        return res.status(400).send({
            message: 'Los datos son obligatorios.'
        })
    }
    const createoffer = new OfferModel({
        title: req.body.title,
        description: req.body.description,
        salary: req.body.salary,
        address: req.body.address,
        endTime: req.body.endTime 
    })
    createoffer.save().then((dataoffer) => {
        res.send(dataoffer)
    }).catch((error) => {
        res.status(500).send({
            message: error.message
        })
    })
}
exports.update  = async(req, res) => {
   try {
    if (Object.entries(req.body).length == 0) {

        return res.status(400).send({
            message: 'Los datos son obligatorios.'
        })
    }
    const createoffer = {
        title: req.body.title,
        description: req.body.description,
        salary: req.body.salary,
        address: req.body.address,
        endTime: req.body.endTime 
    }
    offerUpdate = await OfferModel.findByIdAndUpdate(req.params.id, createoffer) 
        res.send(offerUpdate)
   } catch (error) {
    res.status(500).send({
        message: error.message
   })
   }
} 
exports.getAll=(req,res)=>{
    OfferModel.find() 
    .then((createoffer)=>{res.send(createoffer)})
    .catch(
        (error)=>{
            res.status(500).send({
                message:error.message
            })
        }
    )

}