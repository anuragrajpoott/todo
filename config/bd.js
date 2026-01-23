const mongoose = require("mongoose");

require("dotenv").config();

const bdconnect = () => {
    mongoose.connect(process.env.DATABASE)
    .then(()=>{console.log("success")})
    .catch((error)=>{
        console.log("error");
        console.error(error);
        process.exit(1);
    });
}

module.exports = bdconnect;