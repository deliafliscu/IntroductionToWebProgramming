import "./styles.css";

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})

const myButton = document.getElementById("my-button");

myButton.addEventListener("click", function () {
  console.log("hello world!");
});

const myNotebook = document.getElementById("my-notebook");

myButton.addEventListener("click", function () {
  myNotebook.textContent = "Moi maailma";
});

const addData = document.getElementById("add-data");
const list = document.getElementById("list");
const textArea = document.getElementById("text-area");

addData.addEventListener("click", function () {
  const listElement = document.createElement("li");
  listElement.textContent = textArea.value;
  list.appendChild(listElement);
});
