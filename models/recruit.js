const mongoose = require('mongoose');
const recruitSchema = new mongoose.Schema({ 
    notify: {type: Boolean,required: true},
    applicantstatus: {type: String,required: true},
    applicantprocess: {type: String,required:true}
})
module.exports= mongoose.model('Recruit', recruitSchema)