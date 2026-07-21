import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";

import Navbar from "../components/layout/Navbar";
import Loader from "../components/common/Loader";
import TodoForm from "../components/todo/TodoForm";
import TodoList from "../components/todo/TodoList";
import MainLayout from "../layouts/MainLayout";

import {
  addTodo,
  editTodo,
  fetchTodos,
  removeTodo,
} from "../features/todo/todoSlice";

const Home = () => {
  const dispatch = useDispatch();

  const { todos, loading } = useSelector(
    (state) => state.todo
  );

  const [editingTodo, setEditingTodo] = useState(null);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleSubmit = async (data) => {
    try {
      if (editingTodo) {
        await dispatch(
          editTodo({
            id: editingTodo._id,
            todo: data,
          })
        ).unwrap();

        toast.success("Todo updated.");
        setEditingTodo(null);
      } else {
        await dispatch(addTodo(data)).unwrap();

        toast.success("Todo created.");
      }
    } catch (error) {
      toast.error(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await dispatch(removeTodo(id)).unwrap();
      toast.success("Todo deleted.");
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <MainLayout>
      <Navbar />

      <TodoForm
        onSubmit={handleSubmit}
        initialValues={editingTodo}
        isEditing={!!editingTodo}
      />

      {loading ? (
        <Loader />
      ) : (
        <TodoList
          todos={todos}
          onEdit={setEditingTodo}
          onDelete={handleDelete}
        />
      )}
    </MainLayout>
  );
};

export default Home;