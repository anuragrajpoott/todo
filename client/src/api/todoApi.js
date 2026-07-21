import axios from "axios";

const todoApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getTodos = () => todoApi.get("/");

export const createTodo = (todo) => todoApi.post("/", todo);

export const updateTodo = (id, todo) =>
  todoApi.patch(`/${id}`, todo);

export const deleteTodo = (id) =>
  todoApi.delete(`/${id}`);

export default todoApi;