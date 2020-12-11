const mongoose = require('mongoose')
const examSchema = new mongoose.Schema({
    examtitle: {type: String, required: true},
    examinationdescription: {type: String, required: true},
    examlanguage: {type: String, required:true},
    examLink: {type:String, required:true},
    position:{ type:String, required:true},
    salary:{ type:String, required: true},
    company:{type: mongoose.Schema.Types.ObjectId, ref: 'Company'}
})
module.exports = mongoose.model('Exam', examSchema)