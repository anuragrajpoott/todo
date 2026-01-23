const express = require("express");

const Router = express.Router();

const {createToDo} = require("../controller/createToDo");
const {getTodo, getTodoById} = require("../controller/getTodo");
const {updateTodo} = require("../controller/updateTodo")
const {deleteTodo} = require("../controller/deleteTodo");


Router.post("/createToDo",createToDo);
Router.get("/getTodo",getTodo);
Router.get("/getTodos/:id",getTodoById);
Router.put("/updateTodo/:id",updateTodo);
Router.get("/getTodo/:id",deleteTodo);

module.exports = Router;