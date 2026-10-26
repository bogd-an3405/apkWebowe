import TodoEntry from "./TodoEntry.js";
const dodaj = document.querySelector("#dodaj");
const wpisz = document.querySelector("#wpisz");
const pola = document.querySelector("#pola");
let arrayOfTodos = [];
if (dodaj && wpisz && pola) {
    dodaj?.addEventListener('click', (e) => {
        let inputTextFieldValue = wpisz?.value;
        arrayOfTodos.push(new TodoEntry(arrayOfTodos.length, wpisz?.value));
        buildList();
    });
}
function buildList() {
    pola.innerHTML = "";
    arrayOfTodos.forEach(element => {
        pola.innerHTML += element.render();
    });
}
