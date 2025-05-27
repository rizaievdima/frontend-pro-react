import { ADD_TODO } from "./actionTypes";

export const addTodo = (title) => {
    return {
        type: ADD_TODO,
        payload: {
            id: `${title}-${Math.random()}`,
            title,
        },
    };
};
