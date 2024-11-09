// Create container 및 append to the body
const container = document.createElement("div");
container.classList.add("container");
document.body.appendChild(container);

// Create inputContainer container 및 append to the container
const inputContainer = document.createElement("div");
inputContainer.classList.add("inputContainer");
container.appendChild(inputContainer);

// Create input and button and append to the inputContainer
const inputValue = document.createElement("input");
const inputButton = document.createElement("button");
inputValue.classList.add('input')
inputValue.placeholder = "What are your tasks for today?"
inputButton.id = "addBtn";
inputButton.innerText = "추가하기";

inputContainer.appendChild(inputValue);
inputContainer.appendChild(inputButton);

const todoListContainer = document.createElement("div");
todoListContainer.classList.add("todoListContainer");
container.appendChild(todoListContainer);

// Create todoList container and append to the container
const todoList = document.createElement("div");
const todoTitle = document.createElement("div");
const todoContent = document.createElement("div");
todoTitle.classList.add("todoTitle");
todoContent.classList.add("todoContent");
todoList.classList.add("todoList");
todoTitle.innerText = "TO DO LIST";
todoList.appendChild(todoTitle);
todoList.appendChild(todoContent);
todoListContainer.appendChild(todoList);

// Create doneList container and append to the container
const doneList = document.createElement("div");
const doneTitle = document.createElement("div");
const doneContent = document.createElement("div");
doneTitle.classList.add("doneTitle");
doneContent.classList.add("doneContent");
doneList.classList.add("doneList");
doneTitle.innerText = "DONE LIST";
doneList.appendChild(doneTitle);
doneList.appendChild(doneContent);
todoListContainer.appendChild(doneList);

const handleCreateTodo = () => {
  if (inputValue.value.trim() === "") {
    return;
  }

  const todoContainer = document.createElement("div");
  const randomId = Math.floor(Math.random() * 100);
  todoContainer.classList.add("todoContainer")
  todoContainer.setAttribute("data-set", randomId);

  const todoSection1 = document.createElement("div");  
  todoSection1.classList.add("todoSection1");
  
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("checkbox");
  checkbox.checked = false;

  const todoSection2 = document.createElement("div");
  const todo = document.createElement("input");
  todo.classList.add("todo");
  todoSection2.classList.add("todoSection2");
  todo.disabled = true;
  todo.value = inputValue.value;
  
  const updateButton = document.createElement("button");
  updateButton.classList.add("updateButton");
  updateButton.type = "button";
  updateButton.innerText = "수정";

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("deleteButton");
  deleteButton.type = "button";
  deleteButton.innerText = "삭제";

  todoSection1.append(checkbox)
  todoSection2.append(todo, updateButton, deleteButton)
  todoContainer.append(todoSection1, todoSection2);
  todoContent.append(todoContainer);

  inputValue.value = "";

  updateButton.addEventListener("click", () => {
    if (updateButton.innerText === "수정") {
      todo.disabled = false;
      updateButton.innerText = "저장";
      todo.focus();
    } else {
      todo.disabled = true;
      updateButton.innerText = "수정";
    }
  })

  deleteButton.addEventListener("click", () => {
    todoContainer.remove();
  });
  

  checkbox.addEventListener("click", () => {
    if (checkbox.checked) {
      doneContent.append(todoContainer);
      updateButton.style.display = "none";
    } else {
      todoContent.append(todoContainer);
      updateButton.style.display = "block";
    }
  });
};

inputButton.addEventListener("click", handleCreateTodo);

inputValue.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    handleCreateTodo();
  }
});
