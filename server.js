const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT;

app.use(express.json());

const todoroutes = require("./routes/todos");

app.use("/api/v1",todoroutes);

app.listen(PORT,()=>{
    console.log("running ");
})

const bdconnect = require("./config/bd");
bdconnect();

app.get("/",(req,res)=>{
    res.send(`<h1>home page</h1>`)
});