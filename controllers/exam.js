const exam = require('../models/exam')
const ExamModel = require('../models/exam')
exports.create = (req, res) => {
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
    exams = await exam.save()
        res.send(dataExam) 
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
    const exam = {
        examtitle: req.body.examtitle,
        examinationdescription: req.body.examinationdescription,
        examlanguage: req.body.examlanguage,
        examLink: req.body.examLink,
        position: req.body.position,
        salary: req.body.salary,
        company: req.body.company
    }
   examModel = await ExamModel.findByIdAndUpdate(req.params.id, exam, { new: true })
        res.send(examUpdate)
            } catch (error) {
                res.status(500).send({
                    message: error.message
                })
            }          
}
exports.getAll =(req, res) => {
    try {
    examModel = await ExamModel.find()
     res.send(exams)
    }catch (error)  {
            res.status(500).send({
                message: error.nessage
            })
        }   
}
exports.getOne = (req, res) => {
    try {
        examModel = await ExamModel.findById(req.params.id)
    res.send(exam)
    } catch (error) {
            res.status(500).send({
                message: error.message
            })
        }    
}
exports.deleteOne= (req,res) => {
    try {
        examModel = await ExamModel.findByIdAndRemove(req.params.id)
    res.send(exam)
} catch (error)  {
            res.status(500).send( {
                message:error.message
            })
        }    
}