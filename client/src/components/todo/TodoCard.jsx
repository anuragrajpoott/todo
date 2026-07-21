import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import {
  Check,
  Pencil,
  Trash2,
} from "lucide-react";

import { editTodo } from "../../features/todo/todoSlice";

const TodoCard = ({
  todo,
  onEdit,
  onDelete,
}) => {
  const dispatch = useDispatch();

  const toggleComplete = async () => {
    try {
      await dispatch(
        editTodo({
          id: todo._id,
          todo: {
            completed: !todo.completed,
          },
        })
      ).unwrap();

      toast.success(
        todo.completed
          ? "Marked as pending."
          : "Marked as completed."
      );
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">
      <div className="flex items-start justify-between gap-5">
        <div className="flex-1">
          <h3
            className={`text-lg font-semibold ${
              todo.completed
                ? "text-slate-400 line-through"
                : "text-slate-900"
            }`}
          >
            {todo.title}
          </h3>

          {todo.description && (
            <p className="mt-2 text-sm text-slate-500">
              {todo.description}
            </p>
          )}
        </div>

        <span
          className={`rounded-full px-3 py-1 text-xs font-medium ${
            todo.completed
              ? "bg-green-100 text-green-700"
              : "bg-yellow-100 text-yellow-700"
          }`}
        >
          {todo.completed
            ? "Completed"
            : "Pending"}
        </span>
      </div>

      <div className="mt-6 flex justify-end gap-3">
        <button
          onClick={toggleComplete}
          className="rounded-lg bg-green-100 p-2 text-green-700 transition hover:bg-green-200"
        >
          <Check size={18} />
        </button>

        <button
          onClick={() => onEdit(todo)}
          className="rounded-lg bg-blue-100 p-2 text-blue-700 transition hover:bg-blue-200"
        >
          <Pencil size={18} />
        </button>

        <button
          onClick={() => onDelete(todo._id)}
          className="rounded-lg bg-red-100 p-2 text-red-700 transition hover:bg-red-200"
        >
          <Trash2 size={18} />
        </button>
      </div>
    </article>

      );
};

export default TodoCard;