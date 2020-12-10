const mongoose =require('mongoose');
const config = require('./config')
const conectDB = ()=>{
    mongoose.connect('mongodb+srv://hackgrupo1:hackgrupo1@hackgroup1.evqtn.mongodb.net/HackGroup1?retryWrites=true&w=majority',{
        useNewUrlParser:true,useUnifiedTopology:true},(error)=>{
            if(error){
                console.log('Error',error)
            }else{
                console.log('We successfully connected to the coodyExpert DB.')
            }
        })
}
module.exports={conectDB} 