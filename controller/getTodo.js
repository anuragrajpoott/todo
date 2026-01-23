

const todo = require("../models/todo");

exports.getTodo = async(req,res)=>{
    try {
        
        const todos = await todo.find({});
        res.status(200).json(
            {
                success:true,
                data:res,
                message:"successfully fetched"
            }
        )
    } catch (err) {
        console.error(err);
        console.log(err);
        res.status(500).json(
            {
                success:false,
                data:"no data",
                message:err.message
            }
        )
        
    }
}


exports.getTodoById = async(req,res)=>{
    try {
        const id = req.params.id();
        const todos = await todo.findById({_id:id});

        if(!todos){
           res.status(404).json({
            success:false,
            data:"not found",
            message: err.message
           })
        }
        res.status(200).json(
            {
                success:true,
                data:res,
                message:"successfully fetched"
            }
        )
    } catch (err) {
        console.error(err);
        console.log(err);
        res.status(500).json(
            {
                success:false,
                data:"no data",
                message:err.message
            }
        )
        
    }
}