const mongoose=require('mongoose')
const todoschema=new mongoose.Schema({
    id:Number,
    title:String,
    priority:String
})

module.exports=mongoose.model('userinfo',todoschema) 