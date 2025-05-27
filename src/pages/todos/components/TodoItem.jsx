import styles from "../todos.module.css";

export default function TodoItem({ todo }) {
    return (
        <div className={styles["todos-list__item"]}>
            <h4>{todo.title}</h4>
        </div>
    );
}
