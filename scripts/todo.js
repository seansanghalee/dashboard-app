const toDoForm = document.querySelector(".todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function handleDeleteTodo(event) {
  const toDelete = event.target.parentElement;
  toDelete.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(toDelete.id));
  saveToDos(toDos);
}

function paintToDo(newToDoObj) {
  const li = document.createElement("li");
  li.id = newToDoObj.id;

  const span = document.createElement("span");
  span.innerText = newToDoObj.text;

  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", handleDeleteTodo);

  li.appendChild(span);
  li.appendChild(button);

  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  const newToDoObj = {
    id: Date.now(),
    text: newToDo,
  };
  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

function sayHello(item) {
  console.log(item);
}

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos);
  // below two functions are basically the same
  //   parsedToDos.forEach(sayHello);
  //   parsedToDos.forEach((item) => console.log(item));
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}

// filter should return true if you want to include it in the array
function sexyFilter(item, id) {
  return item.id !== id;
}
