const { response } = require("express");
const todo = require("../models/todo");

exports.createToDo = async(req,res)=>{
    try {
        const {title,description} = req.body;
        const responce = await todo.create({title,description});
        res.status(200).json(
            {
                success:true,
                data:todo,
                message:"success"
            }
        )
    } catch (err) {
        console.error(err);
        console.log(err);
        res.status(500).json(
            {
                success:false,
                data:"no responce",
                message:err.message
            }
        )
        
    }
}



exports.deleteTodo = async(req,res)=>{
    try {
        const {id} = req.params;
        await todo.findByIdAndDelete({_id:id}
        );
        res.json(
            {
                success:true,
                message:"successfully delted"
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

exports.updateTodo = async(req,res)=>{
    try {
        const {id} = req.params;
        const {title,description} = req.body;
        const todos = await todo.findByIdAndUpdate({_id:id},
            {title,description}
        );
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