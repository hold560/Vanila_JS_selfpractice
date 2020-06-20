const form = document.querySelector(".js-form"),
  greeting = document.querySelector(".js-greeting"),
  input = form.querySelector(".js-input");

const USER_KEY = "userName"; //key name set
const SHOW_CL = "showing";

function saveName(text) {
  localStorage.setItem(USER_KEY, text);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentInput = input.value;
  printGreeting(currentInput);
  saveName(currentInput);
}

function askName() {
  form.classList.add(SHOW_CL);
  form.addEventListener("submit", handleSubmit);
}

function printGreeting(text) {
  form.classList.remove(SHOW_CL);
  greeting.classList.add(SHOW_CL);
  greeting.innerText = `Hello ${text}`;
}

function loadName() {
  const USER_Value = localStorage.getItem(USER_KEY); // call value
  if (USER_Value === null) {
    askName();
  } else {
    printGreeting(USER_Value);
  }
}

function init() {
  loadName();
}

init();
