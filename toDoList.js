const toDoForm = document.querySelector(".js-toDo"),
  toDoInput = toDoForm.querySelector(".js-toDoInput"),
  toDoList = document.querySelector(".js-toDoList");

const toDo_LS = "toDoList";
let toDos = [];

function deleteToDos(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li); //parentNode를 통째로 지워야함
  //console.log(toDos);
  const cleanToDos = toDos.filter(function (toDo) {
    //console.log(toDo.id, li.id);
    return toDo.id !== parseInt(li.id);
  });
  //console.log(cleanToDos);
  toDos = cleanToDos;
  saveToDos(toDos);
}

function printToDos(text) {
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

function submitToDo(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  printToDos(toDoInput.value);
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
      printToDos(toDo.text);
    });
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", submitToDo);
}

init();
