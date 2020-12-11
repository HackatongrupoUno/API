const exam = require('../models/exam')
const ExamModel = require('../models/exam')
exports.create = async (req, res) => {
    try {
        if (Object.entries(req.body).length == 0) {

            return res.status(400).send({
                message: 'Los datos son obligatorios'
            })
        }
        const exam = new ExamModel({
            examtitle: req.body.examtitle,
            examinationdescription: req.body.examinationdescription,
            examlanguage: req.body.examlanguage,
            examLink: req.body.examLink,
            position: req.body.position,
            salary: req.body.salary,
            company: req.body.company
        })
        const exams = await exam.save()
        res.send(dataExam)
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
        const exam = {
            examtitle: req.body.examtitle,
            examinationdescription: req.body.examinationdescription,
            examlanguage: req.body.examlanguage,
            examLink: req.body.examLink,
            position: req.body.position,
            salary: req.body.salary,
            company: req.body.company
        }
        const examUpdate = await ExamModel.findByIdAndUpdate(req.params.id, exam, { new: true })
        res.send(examUpdate)
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
}
exports.getAll = async (req, res) => {
    try {
        const exams = await ExamModel.find()
        res.send(exams)
    } catch (error) {
        res.status(500).send({
            message: error.nessage
        })
    }
}
exports.getOne = async (req, res) => {
    try {
        const exam = await ExamModel.findById(req.params.id)
        res.send(exam)
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
}
exports.deleteOne = async (req, res) => {
    try {
        const examModel = await ExamModel.findByIdAndRemove(req.params.id)
        res.send(exam)
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
}