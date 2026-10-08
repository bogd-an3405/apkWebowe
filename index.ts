
const dodaj: HTMLButtonElement|null = document.querySelector("#dodaj");
const kod: HTMLInputElement|null = document.querySelector("#kod");
const nazwa: HTMLInputElement|null = document.querySelector("#nazwa");
const kategoria: HTMLInputElement|null = document.querySelector("#kategoria");
const ilosc: HTMLInputElement|null = document.querySelector("#ilosc");
const sektor: HTMLInputElement|null = document.querySelector("#sektor");
const regal: HTMLInputElement|null = document.querySelector("#regal");
const polka: HTMLInputElement|null = document.querySelector("#polka");

const pola: HTMLDivElement|null = document.querySelector("#pola");

type produkt = {
    kod: string,
    nazwa: string,
    kategoria: string,
    ilosc: number,
    sektor: string,
    regal: string,
    polka: string
}

let arrayOfProducts: produkt[] = [];

if(dodaj && kod && nazwa && kategoria && ilosc && sektor && regal && polka && pola){

    dodaj.addEventListener("click", () => {

        const kodP = kod.value.trim();
        const nazwaP = nazwa.value.trim();
        const kategoriaP = kategoria.value.trim();
        const iloscP = Number(ilosc.value);
        const sektorP = sektor.value.trim();
        const regalP = regal.value.trim();
        const polkaP = polka.value.trim();

        if(
            !nazwaP ||
            !kodP ||
            !kategoriaP ||
            !sektorP ||
            !regalP ||
            !polkaP ||
            ilosc.value === ""
        ){
            alert("wypelnij wszystkie pola.");
            return;
        }

        if(!Number.isFinite(iloscP) || iloscP < 0){
            alert("ilosc nie moze byc ujemna.");
            return;
        }

        const codeExists = arrayOfProducts.some(element =>
            element.kod === kodP
        );

        if(codeExists){
            alert("produkt o takim kodzie juz istnieje.");
            return;
        }

        let newProduct: produkt = {
            kod: kodP,
            nazwa: nazwaP,
            kategoria: kategoriaP,
            ilosc: iloscP,
            sektor: sektorP,
            regal: regalP,
            polka: polkaP
        };

        arrayOfProducts.push(newProduct);
        buildList();

        nazwa.value = "";
        kod.value = "";
        kategoria.value = "";
        ilosc.value = "";
        sektor.value = "";
        regal.value = "";
        polka.value = "";
    });
}

function buildList(){

    if(!pola){
        return;
    }

    pola.innerHTML = "";

    arrayOfProducts.forEach(element => {
        let container = document.createElement("div");
        container.classList.add("card", "mt-1", "shadow");

        let container2 = document.createElement("div");
        container2.classList.add("card-body");

        let title = document.createElement("h3");
        title.classList.add("h3");
        title.textContent = element.nazwa;

        let details = document.createElement("p");
        details.textContent =
            "kod: " + element.kod +
            " | kategoria: " + element.kategoria +
            " | ilosc: " + element.ilosc + " " + element.sektor;

        container2.appendChild(title);
        container2.appendChild(details);
        container.appendChild(container2);

        pola.appendChild(container);
    });
}