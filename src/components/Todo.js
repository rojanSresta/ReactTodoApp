import { useState } from "react";

export const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [todoDesc, setTodoDesc] = useState("");

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (todoDesc) {
      setTodos([...todos, todoDesc]);
      setTodoDesc("");
    }
  };

  const handleDelete = (index) => {
    return () => {
      const updatedTodo = [...todos];
      updatedTodo.splice(index, 1);
      setTodos(updatedTodo);
    };
  };

  return (
    <>
      <div className="container">
        <div className="TodoInputContainer">
          <h1>YourTodo--Save and Delete</h1>
          <form onSubmit={handleAddTodo}>
            <input
              name="todo"
              id="TodoText"
              type="text"
              placeholder="Enter your Todo"
              value={todoDesc}
              onChange={(e) => setTodoDesc(e.target.value)}
            />
            <button
              name="submit"
              type="submit"
              id="TodoAddBtn"
              onClick={handleAddTodo}
            >
              Add
            </button>
          </form>
        </div>
        <div className="TodoShowContainer">
          <p>Added TODOs will appear here</p>
          <div className="TodoList">
            {todos.map((todo, index) => (
              <div key={index} className="TodoItem">
                <p>{todo}</p>
                <button
                  type="button"
                  className="deleteBtn"
                  onClick={handleDelete(index)}
                >
                  X
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
