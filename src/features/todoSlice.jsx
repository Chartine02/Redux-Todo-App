import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: { value: [] },
  reducers: {
    addTodo: (state, action) => {
      state.value.push({
        id: crypto.randomUUID(),
        name: action.payload.name,
        completed: false,
      });
    },
    deleteTodo: (state, action) => {
      state.value = state.value.filter((todo) => todo.id !== action.payload);
    },
    toggleComplete: (state, action) => {
      const todo = state.value.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    editTodo: (state, action) => {
      state.value;
    },
  },
});

export const { addTodo, deleteTodo, toggleComplete } = todoSlice.actions;

export default todoSlice.reducer;
