import { useDispatch } from "react-redux";
import { updateTodo, deleteTodo } from "../../../store/thunks/todosThunk";
import styles from "../todos.module.css";

export default function TodoItem({ todo }) {
  const dispatch = useDispatch();
  const handleToggleStatus = (id) => {
    dispatch(updateTodo({ id, completed: !todo.completed }));
  };
  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };
  return (
    <div className={styles["todos-list__item"]}>
      <h4>{todo.title}</h4>
      <p>Status: {todo.completed ? "Completed" : "Pending"}</p>
      <button className="button" onClick={() => handleToggleStatus(todo.id)}>
        Toggle Status
      </button>
      <button className="button" onClick={() => handleDelete(todo.id)}>
        Delete
      </button>
    </div>
  );
}
