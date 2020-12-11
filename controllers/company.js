const CompanyModel =require('../models/company')
exports.create = async (req, res) => {
    try {
        if (Object.entries(req.body).length == 0) {
            return res.status(400).send({
                message: 'Los datos son obligatorios.'
            })
        }
        const company = new CompanyModel({
            nameCompany: req.body.nameCompany,
            nitCompany: req.body.nitCompany,
            phoneCompany: req.body.phoneCompany,
            email: req.body.email,
            password: req.body.password,
            role: req.body.role,
            tipo: req.body.tipo
        })
        const companys = await company.save()
        res.send(dataoffer)
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
}
exports.update = async (req, res) => {
    try {
        if (Object.entries(req.body).length == 0) {

            return res.status(400).send({
                message: 'Los datos son obligatorios.'
            })
        }
        const company = {
            nameCompany: req.body.nameCompany,
            nitCompany: req.body.nitCompany,
            phoneCompany: req.body.phoneCompany,
            email: req.body.email,
            password: req.body.password,
            role: req.body.role,
            tipo: req.body.tipo
        }
        const offerUpdate = await CompanyModel.findByIdAndUpdate(req.params.id, company)
        res.send(offerUpdate)
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
}
exports.getAll = async (req, res) => {
    try {
        const createCompany = await CompanyModel.find()
        res.send(createCompany)
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
}
exports.getOne = async (req, res) => {
    try {
        const company = await CompanyModel.findByIdAndRemove(req.params.id)
        res.send(company)
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
}
exports.deleteOne = async (req, res) => {
    try {
        const company = await CompanyModel.findByIdAndRemove(req.params.id)
        res.send(company)
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
}