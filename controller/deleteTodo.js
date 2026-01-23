
const todo = require("../models/todo");

exports.updateTodo = async(req,res)=>{
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