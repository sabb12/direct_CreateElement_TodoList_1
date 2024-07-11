const inputContainer = document.querySelector(".inputContainer");
const inputValue = document.createElement("input");
const inputButton = document.createElement("button");
inputButton.innerText = "Enter";

inputContainer.appendChild(inputValue);
inputContainer.appendChild(inputButton);

inputButton.addEventListener("click", () => {
  const todoList = document.querySelector(".todoList");
  const todoContainer = document.createElement("div");
  const randomId = Math.floor(Math.random() * 100);
  todoContainer.setAttribute("data-set", randomId);

  const todo = document.createElement("div");
  todo.innerText = inputValue.value;

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = false;

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delBtn");
  deleteButton.type = "button";
  deleteButton.innerText = "삭제";

  todoContainer.append(todo, checkbox, deleteButton);
  todoList.append(todoContainer);

  inputValue.value = "";

  deleteButton.addEventListener("click", () => {
    todoContainer.remove();
  });

  checkbox.addEventListener("click", () => {
    if (checkbox.checked) {
      completedList.append(todoContainer);
    } else {
      todoList.append(todoContainer);
    }
  });
});
