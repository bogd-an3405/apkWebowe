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
        container.classList.add("card-body","mt-1","shadow");

        let container2 = document.createElement("div");
        container.classList.add("card");

        let title = document.createElement('h3');
        title.classList.add("h3");
        let id = document.createElement('p');
        let button = document.createElement('button');
        id.classList.add("small");
        title.textContent = "tytul: "+element.title;
        id.textContent = "id: "+element.id;
        button.textContent = "delete";
   //     button.classList.add("bs-danger"," text-white");
        
        container.appendChild(title);
        container.appendChild(id);
        container.appendChild(button);

        container2.appendChild(container);

        pola?.appendChild(container);
       })
}