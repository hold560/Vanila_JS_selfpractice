const toDoForm = document.querySelector(".js-toDo"),
  toDoInput = toDoForm.querySelector(".js-toDoInput"),
  toDoList = document.querySelector(".js-toDoList");

const toDo_LS = "toDoList";
const toDos = [];

function deleteToDos(event) {}
function printToDo(text) {
  const btn = document.createElement("button");
  const li = document.createElement("li");
  const span = document.createElement("span");
  const newID = toDos.length + 1;
  span.innerText = text;
  btn.innerText = "X";
  btn.addEventListener("click", deleteToDos);
  li.appendChild(btn);
  li.appendChild(span);
  li.id = newID;
  toDoList.appendChild(li);
  const toDoObj = { id: newID, text: text };
  toDos.push(toDoObj);
  saveToDos();
}

function submintToDo(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  printToDo(toDoInput.value);
  toDoInput.value = "";
}

function saveToDos() {
  localStorage.setItem(toDo_LS, JSON.stringify(toDos));
}

function loadToDos() {
  const loadedToDo = localStorage.getItem(toDo_LS);
  if (loadedToDo !== null) {
    const parsedToDos = JSON.parse(loadedToDo);
    console.log(parsedToDos);
    parsedToDos.forEach(function (toDo) {
      printToDo(toDo.text);
    });
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", submintToDo);
}

init();
