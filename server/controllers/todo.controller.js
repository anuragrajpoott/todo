import Todo from "../models/Todo.js";
import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";

export const createTodo = asyncHandler(async (req, res) => {
  const { title, description, dueDate } = req.body;

  const todo = await Todo.create({
    title,
    description,
    dueDate,
  });

  res.status(201).json(
    new ApiResponse(true, "Todo created successfully.", todo)
  );
});

export const getTodos = asyncHandler(async (req, res) => {
  const todos = await Todo.find().sort({ createdAt: -1 });

  res.status(200).json(
    new ApiResponse(true, "Todos fetched successfully.", todos)
  );
});

export const getTodoById = asyncHandler(async (req, res) => {
  const todo = await Todo.findById(req.params.id);

  if (!todo) {
    return res
      .status(404)
      .json(new ApiResponse(false, "Todo not found."));
  }

  res.status(200).json(
    new ApiResponse(true, "Todo fetched successfully.", todo)
  );
});

export const updateTodo = asyncHandler(async (req, res) => {
  const { title, description, completed, dueDate } = req.body;

  const todo = await Todo.findByIdAndUpdate(
    req.params.id,
    {
      title,
      description,
      completed,
      dueDate,
    },
    {
      new: true,
      runValidators: true,
    }
  );

  if (!todo) {
    return res
      .status(404)
      .json(new ApiResponse(false, "Todo not found."));
  }

  res.status(200).json(
    new ApiResponse(true, "Todo updated successfully.", todo)
  );
});

export const deleteTodo = asyncHandler(async (req, res) => {
  const todo = await Todo.findByIdAndDelete(req.params.id);

  if (!todo) {
    return res
      .status(404)
      .json(new ApiResponse(false, "Todo not found."));
  }

  res.status(200).json(
    new ApiResponse(true, "Todo deleted successfully.")
  );
});