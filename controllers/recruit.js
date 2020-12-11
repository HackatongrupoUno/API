const RecruitModel = require('../models/recruit');
exports.create = async (req, res) => {
    try {
        if (Object.entries(req.body).length == 0) {

            return res.status(400).send({
                message: 'Los datos son obligatorios.'
            })
        }
        const recruit = new RecruitModel({
            notify: req.body.notify,
            applicantstatus: req.body.applicantstatus,
            applicantprocess: req.body.applicantprocess
        })
        const datarecruit = await recruit.save()
        res.send(datarecruit)
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
        const updateteoffer = {
            notify: req.body.notify,
            applicantstatus: req.body.applicantstatus,
            applicantprocess: req.body.applicantprocess
        }
        const recruitUpdate = await RecruitModel.findByIdAndUpdate(req.params.id, recruit)
        res.send(recruitUpdate)
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
}
exports.getAll = async (req, res) => {
    try {
        const createrecruit = await RecruitModel.find()
        res.send(createrecruit)
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
} 