import EmptyState from "./EmptyState";
import TodoCard from "./TodoCard";

const TodoList = ({
  todos,
  onEdit,
  onDelete,
}) => {
  if (!todos.length) {
    return <EmptyState />;
  }

  return (
    <section className="space-y-5">
      {todos.map((todo) => (
        <TodoCard
          key={todo._id}
          todo={todo}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </section>
  );
};

export default TodoList;