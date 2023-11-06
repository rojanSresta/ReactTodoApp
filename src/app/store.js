import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});

//this is a redux store
