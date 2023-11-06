// const handleAddedTodo = () => {
//     const todoDesc = document.getElementById("TodoText").value;
//     let todoList = document.querySelector("TodoItem")[0];

//     if (todoList) {
//       // Create new elements
//       let todoItem = document.createElement("div");
//       let newTodo = document.createElement("p");
//       let delteBtn = document.createElement("button");

//       //add class to new elements
//       todoItem.classList.add("todoItem");
//       delteBtn.classList.add("deleteBtn");

//       //set the rescpective value in respective variable
//       newTodo.textContent = todoDesc;
//       delteBtn.textContent = "X";

//       // Append the element to the list of TODOs
//       todoList.appendChild(todoItem);
//       todoItem.appendChild(newTodo);
//       todoItem.appendChild(delteBtn);

//       // Clear the input field
//       document.getElementById("TodoText").value = "";
//     }
//   };
