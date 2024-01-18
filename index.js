const todoList = document.querySelector(".todoList");
const completedList = document.querySelector(".completedList");

const inputValue = document.createElement("input");
const inputButton = document.createElement("button");
inputButton.innerText = "Enter";
document.body.before(inputValue, inputButton);

inputButton.addEventListener("click", (e) => {
  const todoContainer = document.createElement("div");
  const randomId = Math.floor(Math.random() * 100);
  todoContainer.setAttribute("data-set", randomId);

  const todo = document.createElement("div");
  todo.innerText = inputValue.value;
  console.log("todo:", todo);

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = false;

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delBtn");
  deleteButton.type = "button";
  deleteButton.innerText = "삭제";
  // todoContainer.appendChild(todo, checkbox): appendChild로는 2개 동시 못 한다;
  todoContainer.append(todo, checkbox, deleteButton);
  todoList.append(todoContainer);

  inputValue.value = "";

  deleteButton.addEventListener("click", (e) => {
    todoContainer.remove();
  });

  checkbox.addEventListener("click", (e) => {
    if (checkbox.checked) {
      completedList.append(todoContainer);
    } else {
      todoList.append(todoContainer);
    }
  });
});
