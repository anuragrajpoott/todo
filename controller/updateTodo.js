
const todo = require("../models/todo");

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