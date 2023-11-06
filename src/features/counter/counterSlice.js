import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: null,
  },
  reducers: {
    addTodo: (state, action) => {
      state.value += action.payload;
    },
    removeTodo: (state) => {
      state.value = null;
    },
  },
});

export const { addTodo, removeTodo } = counterSlice.actions;
export default counterSlice.reducer;
