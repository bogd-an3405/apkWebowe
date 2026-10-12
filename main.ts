const dodaj: HTMLButtonElement|null = document.querySelector("#dodaj");
const wpisz: HTMLInputElement|null = document.querySelector("#wpisz");
const pola: HTMLDivElement = document.querySelector("#pola")!;

type todo= {
    id: number,
    title: string,
    description?: string,
    isdone?: boolean,
    status: string,
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
        container.classList.add("card","mt-1","shadow");

        let container2 = document.createElement("div");
        container2.classList.add("card-body");

        let title = document.createElement('h3');
        title.classList.add("h3");
        let id = document.createElement('p');
        let button = document.createElement('button');
        button.addEventListener('click',(e) =>{
           arrayOfTodos= arrayOfTodos.filter(t => t.id != element.id);
           buildList();
        });
        let status = document.createElement('select');
        ["todo","doing","done"].forEach(nazwa => {
            let opt = document.createElement('option');
            opt.value = nazwa;
            opt.textContent = nazwa
            status.appendChild(opt);
        })
        id.classList.add("small");
        title.textContent = "tytul: "+element.title;
        id.textContent = "id: "+element.id;
        button.textContent = "delete";
        button.classList.add("bg-danger","text-white");

        container2.appendChild(id);
        container2.appendChild(title);
        container2.appendChild(button);
        container2.appendChild(status);

        container.appendChild(container2);

        pola?.appendChild(container);
       })
}