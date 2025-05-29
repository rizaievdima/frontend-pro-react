import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import TodosForm from "./components/TodosForm";
import TodoItem from "./components/TodoItem";

import { fetchTodos } from "../../store/thunks/todosThunk";

import styles from "./todos.module.css";

export default function Todos() {
  const { todos, loading, error } = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <div>
      <h1>Todos page</h1>
      <TodosForm />
      <h3>Todos: </h3>

      {loading ? (
        <p>Loading todos...</p>
      ) : (
        <div>
          <div className={styles["todos-list"]}>
            {todos.map((todo) => (
              <TodoItem key={todo.id} todo={todo} />
            ))}
          </div>
          <p>Total todos: {todos.length}</p>
        </div>
      )}
      {error && <p className={styles.error}>Error: {error}</p>}
    </div>
  );
}
