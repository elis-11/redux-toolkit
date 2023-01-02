import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  count: 0,
}

export const todoRTSlice = createSlice({
  name: "todoRT",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        _id: new Date(),
        title: action.payload,
      };
      state.todos.push(todo);
      state.count += 1;
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo._id!== action.payload)
      state.count -= 1;
    }
  },
});

export const { addTodo, removeTodo } = todoRTSlice.actions;

export default todoRTSlice.reducer;
