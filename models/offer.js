const mongoose = require('mongoose');
const createOfferSchema = new mongoose.Schema({ 
    title: {type: String,required: true},
    description: {type: String,required: true},
    role: {type: String,required: true, unique: true},
    salary: {type: Number},
    address:{type:String, required:true},
    endTime:{type:Date,required:true }
})
module.exports= mongoose.model('Offer',createOfferSchema)