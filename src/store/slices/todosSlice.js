import { createSlice } from "@reduxjs/toolkit";
import {
  fetchTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} from "../thunks/todosThunk";

const initialState = {
  todos: [],
  loading: false,
  updateLoading: false,
  error: null,
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Fetch all todos
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.loading = false;
        state.todos = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Create todo
      .addCase(createTodo.pending, (state) => {
        state.error = null;
      })
      .addCase(createTodo.fulfilled, (state, action) => {
        state.todos.push(action.payload);
      })
      .addCase(createTodo.rejected, (state, action) => {
        state.error = action.payload;
      })

      // Update todo
      .addCase(updateTodo.pending, (state) => {
        state.updateLoading = true;
        state.error = null;
      })
      .addCase(updateTodo.fulfilled, (state, action) => {
        state.updateLoading = false;
        const updatedTodo = action.payload;

        state.todos = state.todos.map((todo) =>
          todo.id === updatedTodo.id ? updatedTodo : todo
        );
      })
      .addCase(updateTodo.rejected, (state, action) => {
        state.updateLoading = false;
        state.error = action.payload;
      })

      // Delete todo
      .addCase(deleteTodo.pending, (state) => {
        state.error = null;
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      })
      .addCase(deleteTodo.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export default todosSlice.reducer;
