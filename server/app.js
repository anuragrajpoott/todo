import express from "express";
import cors from "cors";

import todoRoutes from "./routes/todo.routes.js";
import notFound from "./middleware/notFound.middleware.js";
import errorHandler from "./middleware/error.middleware.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>Todo API is running 🚀</h1>");
});

app.use("/api/todos", todoRoutes);

app.use(notFound);
app.use(errorHandler);

export default app;