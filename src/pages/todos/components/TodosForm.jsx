import { useState } from "react";
import { useDispatch } from "react-redux";

import { addTodo } from "../../../store/actions/todosActions";

import styles from "../todos.module.css";

export default function TodosForm() {
    const [title, setTitle] = useState("");

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title.trim()) return;

        dispatch(addTodo(title));
        setTitle("");
    };

    return (
        <div>
            <h3>Add new Todo</h3>
            <form className={styles["todos-form"]} onSubmit={handleSubmit}>
                <input
                    className={styles["todos-form__input"]}
                    type="text"
                    placeholder="Todo title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <button className="button" type="submit">
                    Add Todo
                </button>
            </form>
        </div>
    );
}
