
const todo=require('../model/todo')
exports.getAll=async(req,res)=>{
    try{
        const list=await todo.find()
        return res.status(200).send(list)
    }
    catch(err){
        res.status(500).json({msg:'server error'})
    }
}
exports.create=async(req,res)=>{
    try{
        const newtodo=await todo.create(req.body)
        return res.status(200).json({data:newtodo})
    }
    catch(err){
        return res.status(500).json({msg:'server error'})
    }
}

exports.getone=async(req,res)=>{
    try{
        const todos=await todo.findById(req.params.id)
        if(todos){
            return res.status(200).json({data:todos})
        }
        else{
            return res.status(404).json({msg:'todo not found'})
        }
    }
    catch(err)
    {
        res.status(500).json({msg:'server error'})
    }
}
exports.del=async(req,res)=>{
    
    try{
        const idd= await todo.findById(req.params.id)
        if(idd)
        {await todo.findByIdAndDelete(req.params.id)
        return res.status(200).json("deleted")}
    }
    catch(err){
        res.status(500).json({msg:'server error'})
    }
}
exports.upd=async(req,res)=>{
    try{
    const idd= todo.findById(req.params.id)
    console.log(idd)
    if(idd){
        const {title,priority}=req.body
        await todo.findByIdAndUpdate(req.params.id,{title,priority})
        res.status(200).json({msg:'updated'})
    }
    else{
        
            return res.status(404).json({msg:'todo not found'})
        
    }
}
    catch(err)
    {
        res.status(500).json(err)
    }
}