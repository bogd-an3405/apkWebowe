const dodaj: HTMLButtonElement|null = document.querySelector("#dodaj");
const wpisz: HTMLInputElement|null = document.querySelector("#wpisz");
const pola: HTMLDivElement = document.querySelector("#pola")!;

type todo= {
    id: number,
    title: string,
    description?: string,
    isdone?: boolean,
}

let arrayOfTodos: todo [] = [];

if(dodaj && wpisz && pola){

    dodaj?.addEventListener('click',(e) =>{


        let inputTextFieldValue=wpisz?.value;
        let newtodo: todo = {id:arrayOfTodos.length, title: inputTextFieldValue};
        arrayOfTodos.push(newtodo);
        buildList();


    });
}

function buildList(){

       pola.innerHTML="";
       arrayOfTodos.forEach(element => {
        let container = document.createElement("div");
        container.classList.add("card-body");

        let container2 = document.createElement("div");
        container.classList.add("card");

        let title = document.createElement('h3');
        let id = document.createElement('p');

        title.textContent = "tytul: "+element.title;
        id.textContent = "id: "+element.id;

        container.appendChild(title);
        container.appendChild(id);

        container2.appendChild(container);

        pola?.appendChild(container);
       })
}