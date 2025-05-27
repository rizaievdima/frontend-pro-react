import { useSelector } from "react-redux";

import TodosForm from "./components/TodosForm";
import TodoItem from "./components/TodoItem";

import styles from "./todos.module.css";

export default function Todos() {
    const { todos } = useSelector((state) => state);

    return (
        <div>
            <h1>Todos page</h1>
            <TodosForm />
            <h3>Todos:</h3>
            <div className={styles["todos-list"]}>
                {todos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} />
                ))}
            </div>
            <p>Total todos: {todos.length}</p>
        </div>
    );
}
