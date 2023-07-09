const express=require("express")
const app=new express()
const cors=require('cors')
const bodyParser=require('body-parser')
app.use(bodyParser.json())
app.use(cors())
const {getAll,create,getone,del,upd} =require('./controller/todo')
const mongoose=require("mongoose")
const url="mongodb+srv://rest:rest123@cluster0.aokpjn7.mongodb.net/test"
mongoose.connect(url,()=>{console.log("db connected")})
app.use(express.json())
app.listen(3000,()=>{console.log("server started")})

app.get("/",getAll)
app.post("/",create)
app.get("/:id",getone)
app.delete("/:id",del)
app.put("/:id",upd);