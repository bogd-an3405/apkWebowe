const dodaj = document.querySelector("#dodaj");
const wpisz = document.querySelector("#wpisz");
const pola = document.querySelector("#pola");
let arrayOfTodos = [];
if (dodaj && wpisz && pola) {
    dodaj?.addEventListener('click', (e) => {
        let inputTextFieldValue = wpisz?.value;
        let newtodo = { id: arrayOfTodos.length, title: inputTextFieldValue };
        arrayOfTodos.push(newtodo);
    });
}
function buildList() {
    pola.innerHTML = "";
    arrayOfTodos.forEach(element => {
        let container = document.createElement("div");
        container.classList.add('todo-item');
        let title = document.createElement('h3');
        let id = document.createElement('p');
        title.textContent = "tytul: " + element.title;
        id.textContent = "id: " + element.id;
        container.appendChild(title);
        container.appendChild(id);
        pola?.appendChild(container);
    });
}
export {};
//# sourceMappingURL=main.js.map