import { useState } from "react";

export const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [todoDesc, setTodoDesc] = useState("");

  const handleAddedTodo = (e) => {
    e.preventDefault();
    if (todoDesc) {
      setTodos([...todos, todoDesc]);
      setTodoDesc("");
    }
  };

  const handleDeleteBtn = (index) => {
    const updateList = [...todos];
    updateList.splice(index, 1);
    setTodos(updateList);
  };

  return (
    <>
      <div className="TodoInputContainer">
        <h1>ADD YOUR TODO</h1>
        <form onSubmit={handleAddedTodo}>
          <input
            id="TodoText"
            type="text"
            name="Todo"
            placeholder="Enter your Todo"
            value={todoDesc}
            onChange={(e) => setTodoDesc(e.target.value)}
          />
          <button
            id="TodoAddBtn"
            type="button"
            name="Submit"
            onClick={handleAddedTodo}
          >
            Add
          </button>
        </form>
      </div>
      <div className="TodoShowContainer">
        <p className="TodoAppear">Added TODOs will appear here</p>
        <div className="TodoList">
          {todos.map((todo, index) => (
            <div className="TodoItem" key={index}>
              <p>{todo}</p>
              <button
                type="button"
                onClick={() => handleDeleteBtn(index)}
                className="deleteBtn"
              >
                X
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
