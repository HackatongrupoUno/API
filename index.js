const express = require('express'); 
const cors = require('cors')
const bodyParser = require('body-parser')
const {conectDB} =require('./db'); 
const port=process.env.PORT || 8080
const app =express()
app.use(cors())
app.use(bodyParser.json())
conectDB(); 
require('./routes/exam')(app)
require('./routes/user')(app)
require('./routes/recruit')(app)
require('./routes/postulation')(app)
require('./routes/notification')(app)
require('./routes/offer')(app)
require('./routes/company')(app)
app.listen( port,()=>{
    console.log('The server gets up correctly Coody')
})