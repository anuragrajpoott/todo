const mongoose = require("mongoose");

const todoschema = mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
            maxLength:50
        },
        description:{
            type:String,
            required:true,
            maxLength:50
        },
        createdBy:{
            type:Date,
            required:true,
            default:Date.now()
        }


    }
)

module.exports = mongoose.model("todo",todoschema);