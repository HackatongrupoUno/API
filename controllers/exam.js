const exam = require('../models/exam')
const ExamModel = require('../models/exam')
exports.create = (req, res) => {
    if (Object.entries(req.body).length == 0) {

        return res.status(400).send({
            message: 'Los datos son obligatorios'
        })
    }
    const exam = new ExamModel({
        examtitle: req.body.examtitle,
        examinationdescription: req.body.examinationdescription,
        examlanguage: req.body.lenguajeExamen,
        examLink: req.body.examLink,
        position: req.body.position,
        salary: req.body.salary,
        company: req.body.company
    })
    exam.save()
        .then((dataExam) => { res.send(dataExam) })
        .catch((error) => {
            res.status(500).send({
                message: error.message
            })
        })
}
exports.update = (req, res) => {
    if (Object.entries(req.body).length == 0) {

        return res.status(400).send({
            message: 'Los datos son obligatorios.'
        })

    }   
    const exam = {
        examtitle: req.body.examtitle,
        examinationdescription: req.body.examinationdescription,
        lenguajeExamen: req.body.lenguajeExamen,
        examLink: req.body.examLink,
        position: req.body.position,
        salary: req.body.salary,
        company: req.body.company
    }
    ExamModel.findByIdAndUpdate(req.params.id, exam, { new: true })
        .then(
            (examUpdate) => {
                res.send(examUpdate)
            }
        ).catch(
            (error)=> {
                res.status(500).send({
                    message: error.message
                })
            }
        )    
}
exports.getAll =(req, res) => {
    ExamModel.find()
    .populate('companies')
    .exec()
    .then((exams) => res.send(exams))
    .catch(
        (error) => {
            res.status(500).send({
                message: error.nessage
            })
        }
    )
}
exports.getOne = (req, res) => {
    ExamModel.findById(req.params.id)
    .populate('companies')
    .exec()
    .then((exam) => {res.send(exam)})
    .catch(
        (error) => {
            res.status(500).send({
                message: error.message
            })
        }
    )
}
exports.deleteOne= (req,res) => {
    ExamModel.findByIdAndRemove(req.params.id)
    .then((exam)=> {res.send(exam)})
    .catch(
        (error) => {
            res.status(500).send( {
                message:error.message
            })
        }
    )
}

