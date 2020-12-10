const mongoose =require('mongoose');
const config = require('./config')
const conectDB = ()=>{
    mongoose.connect('mongodb+srv://CoodyExpert-Morse:CoodyExpert-Morse@coodyexpert-morse.1aobr.mongodb.net/CoodyExpert?retryWrites=true&w=majority',{
        useNewUrlParser:true,useUnifiedTopology:true},(error)=>{
            if(error){
                console.log('Error',error)
            }else{
                console.log('Nos conectamos con éxito a la DB de CoodyExpert.')
            }
        })
}
module.exports={conectDB} 