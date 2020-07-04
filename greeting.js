const form = document.querySelector(".js-form"),
  name = document.querySelector(".js-name"),
  input = form.querySelector(".js-input");

const USER_KEY = "userName"; //key name set
const SHOW_CL = "showing";

function saveName(text) {
  localStorage.setItem(USER_KEY, text);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentInput = input.value;
  printName(currentInput);
  saveName(currentInput);
}

function askName() {
  form.classList.add(SHOW_CL);
  form.addEventListener("submit", handleSubmit);
}

function printName(text) {
  form.classList.remove(SHOW_CL);
  name.classList.add(SHOW_CL);
  name.innerText = `${text}`;
}

function loadName() {
  const USER_Value = localStorage.getItem(USER_KEY); // call value
  if (USER_Value === null) {
    askName();
  } else {
    printName(USER_Value);
  }
}

function init() {
  loadName();
}

init();
