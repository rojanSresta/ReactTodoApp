//useSelector to read data from the store and dispatch actions using useDispatch

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo } from "./counterSlice";

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <button onClick={() => dispatch(addTodo())}>Add</button>
        <span>{count}</span>
        <button onClick={() => dispatch(removeTodo())}>X</button>
      </div>
    </>
  );
}
