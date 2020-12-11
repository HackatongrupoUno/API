const mongoose = require('mongoose');
const notificationSchema = new mongoose.Schema({
    statusNotification: {type: Boolean, required: true},
    messageNotification: {type: String, required: true}, 
})
module.exports= mongoose.model('notification', notificationSchema)



/* const mongoose = require('mongoose')
const postulationSchema = new mongoose.Schema({
    nameRequest: { type: String, required: true },
    idRequest:  { type: String, required: true },
    dateRequest: { type: Date, required: true},
    statusNotification: { type: Boolean, required: true },
    messageNotification:{ type: String, required: true }
})
module.exports = mongoose.model('Postulation', postulationSchema) */