import { renderPlaceCard } from "./place-cards.js";

let places;
const response = await fetch("../places.json");
places = await response.json(); //hämtas med fetch 

const searchInput = document.getElementById("search-act");
const searchButton = document.getElementById("search-btn");

//sökning
let searchQuery = "";
const normalize = (text) => { // normalize gör sökningen okänslig för stora och små bokstäver
    return text
        .trim()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLocaleLowerCase("sv");
}

const searchPlaces = (places, query) => {
    const searchTerm = normalize(query);

    if (!searchTerm) return places;

    return places.filter((place) => {
        const searchableFields = [
            place.name,
            place.type,
            place.description,
            place.place,
            ...place.activities,
            ...place.subtype
        ];

        return searchableFields.some((field) =>
            normalize(field).includes(searchTerm)
        );
    });
};

//filter-symboler
let activeSymbols = []; // gör en array med alla symboler

export const filterResults = () => {
    const symbolFiltered = activeSymbols.length > 0
        ? places.filter(place =>
            activeSymbols.every(symbol => place.symbols.includes(symbol)) //går igenom arrayen symbols
        )
        : places; // här måste alla visas igen, annars blir det tomt när man tar bort alla filter

    const results = searchPlaces(symbolFiltered, searchInput.value);
    renderPlaceCard(results);
};

export const listeners = () => {
    searchInput.addEventListener("input", filterResults);
    searchButton.addEventListener("click", filterResults);

    const naturreservat = document.querySelector(".symbols.nature-reserve");
    const skog = document.querySelector(".symbols.forest");
    const promenad = document.querySelector(".symbols.path");
    const fagelskadning = document.querySelector(".symbols.bird");
    const park = document.querySelector(".symbols.park");
    const tradgard = document.querySelector(".symbols.garden");
    const vatten = document.querySelector(".symbols.lake");
    const badplats = document.querySelector(".symbols.beach");
    const paddla = document.querySelector(".symbols.canoe");
    const grillplats = document.querySelector(".symbols.bbq");
    const vindskydd = document.querySelector(".symbols.wind-shield");
    const utegym = document.querySelector(".symbols.gym");
    const rastplats = document.querySelector(".symbols.bench");
    const fika = document.querySelector(".symbols.cafe");
    const barnvagn = document.querySelector(".symbols.stroller");
    const rullstol = document.querySelector(".symbols.wheelchair");
    const toalett = document.querySelector(".symbols.toilet");
    const dass = document.querySelector(".symbols.portapotty");
    const parkering = document.querySelector(".symbols.parking");


    naturreservat.addEventListener("click", () => {
        console.log("naturreservat");
        naturreservat.classList.toggle("active");
        if (naturreservat.classList.contains("active")) {
            activeSymbols.push("naturreservat");
            naturreservat.src = "img/symbols/naturreservat.png"; // byt bild till den fyllda
            console.log(activeSymbols);

        } else {
            console.log("ta bort naturreservat");
            activeSymbols = activeSymbols.filter(symbol => symbol !== "naturreservat"); //vad gör denna???
            console.log(activeSymbols);
            naturreservat.src = "img/symbols/naturreservat-inv.png"; // gå tillbaka till den inverterade
        }
        filterResults(); //kör filterResults varje gång man klickar på en symbol
    });

    skog.addEventListener("click", () => {
        console.log("forest");
        skog.classList.toggle("active");
        if (skog.classList.contains("active")) {
            activeSymbols.push("skog");
            skog.src = "img/symbols/skog.png";
            console.log(activeSymbols);
        } else {
            console.log("ta bort skog");
            activeSymbols = activeSymbols.filter(symbol => symbol !== "skog"); //vad gör denna???
            skog.src = "img/symbols/skog-inv.png";
            console.log(activeSymbols);
        }
        filterResults(); //kör filterResults varje gång man klickar på en symbol
    });

    promenad.addEventListener("click", () => {
        console.log("path");
        promenad.classList.toggle("active");
        if (promenad.classList.contains("active")) {
            activeSymbols.push("promenad");
            promenad.src = "img/symbols/promenad.png";
            console.log("lägg till promenad");
            console.log(activeSymbols);
        } else {
            console.log("ta bort promenad");
            activeSymbols = activeSymbols.filter(symbol => symbol !== "promenad"); //vad gör denna???
            promenad.src = "img/symbols/promenad-inv.png";
            console.log(activeSymbols);
        }
        filterResults(); //kör filterResults varje gång man klickar på en symbol
    });

    fagelskadning.addEventListener("click", () => {
        console.log("bird");
        fagelskadning.classList.toggle("active");
        if (fagelskadning.classList.contains("active")) {
            activeSymbols.push("fågelskådning");
            fagelskadning.src = "img/symbols/fågelskådning.png";
            console.log("lägg till fågelskådning");
            console.log(activeSymbols);
        } else {
            console.log("ta bort fågelskådning");
            activeSymbols = activeSymbols.filter(symbol => symbol !== "fågelskådning");
            fagelskadning.src = "img/symbols/fågelskådning-inv.png";
            console.log(activeSymbols);
        }
        filterResults(); //kör filterResults varje gång man klickar på en symbol
    });

    park.addEventListener("click", () => {
        console.log("park");
        park.classList.toggle("active");
        if (park.classList.contains("active")) {
            activeSymbols.push("park");
            park.src = "img/symbols/park.png";
            console.log("lägg till park");
            console.log(activeSymbols);
        } else {
            console.log("ta bort park");
            activeSymbols = activeSymbols.filter(symbol => symbol !== "park");
            park.src = "img/symbols/park-inv.png";
            console.log(activeSymbols);
        }
        filterResults(); //kör filterResults varje gång man klickar på en symbol
    });

    tradgard.addEventListener("click", () => {
        console.log("garden");
        tradgard.classList.toggle("active");
        if (tradgard.classList.contains("active")) {
            activeSymbols.push("trädgård");
            tradgard.src = "img/symbols/trädgård.png";
            console.log("lägg till trädgård");
            console.log(activeSymbols);
        } else {
            console.log("ta bort trädgård");
            activeSymbols = activeSymbols.filter(symbol => symbol !== "trädgård");
            tradgard.src = "img/symbols/trädgård-inv.png";
            console.log(activeSymbols);
        }
        filterResults(); //kör filterResults varje gång man klickar på en symbol
    });

    vatten.addEventListener("click", () => {
        console.log("lake");
        vatten.classList.toggle("active");
        if (vatten.classList.contains("active")) {
            activeSymbols.push("vatten");
            vatten.src = "img/symbols/vatten.png";
            console.log("lägg till vatten");
            console.log(activeSymbols);
        } else {
            console.log("ta bort vatten");
            activeSymbols = activeSymbols.filter(symbol => symbol !== "vatten"); //vad gör denna???
            vatten.src = "img/symbols/vatten-inv.png";
            console.log(activeSymbols);
        }
        filterResults(); //kör filterResults varje gång man klickar på en symbol
    });

    badplats.addEventListener("click", () => {
        console.log("beach");
        badplats.classList.toggle("active");
        if (badplats.classList.contains("active")) {
            activeSymbols.push("badplats");
            badplats.src = "img/symbols/badplats.png";
            console.log("lägg till badplats");
            console.log(activeSymbols);
        } else {
            console.log("ta bort badplats");
            activeSymbols = activeSymbols.filter(symbol => symbol !== "badplats"); //vad gör denna???
            badplats.src = "img/symbols/badplats-inv.png";
            console.log(activeSymbols);
        }
        filterResults(); //kör filterResults varje gång man klickar på en symbol
    });

    paddla.addEventListener("click", () => {
        console.log("canoe");
        paddla.classList.toggle("active");
        if (paddla.classList.contains("active")) {
            activeSymbols.push("paddla");
            paddla.src = "img/symbols/paddla.png";
            console.log("lägg till paddla");
            console.log(activeSymbols);
        } else {
            console.log("ta bort paddla");
            activeSymbols = activeSymbols.filter(symbol => symbol !== "paddla");
            paddla.src = "img/symbols/paddla-inv.png";
            console.log(activeSymbols);
        }
        filterResults(); //kör filterResults varje gång man klickar på en symbol
    });

    grillplats.addEventListener("click", () => {
        console.log("BBQ");
        grillplats.classList.toggle("active");
        if (grillplats.classList.contains("active")) {
            activeSymbols.push("grillplats");
            grillplats.src = "img/symbols/grillplats.png";
            console.log("lägg till grillplats");
            console.log(activeSymbols);
        } else {
            console.log("ta bort grillplats");
            activeSymbols = activeSymbols.filter(symbol => symbol !== "grillplats"); //vad gör denna???
            grillplats.src = "img/symbols/grillplats-inv.png";
            console.log(activeSymbols);
        }
        filterResults(); //kör filterResults varje gång man klickar på en symbol
    });

    vindskydd.addEventListener("click", () => {
        console.log("windShield");
        vindskydd.classList.toggle("active");
        if (vindskydd.classList.contains("active")) {
            activeSymbols.push("vindskydd");
            vindskydd.src = "img/symbols/vindskydd.png";
            console.log("lägg till vindskydd");
            console.log(activeSymbols);
        } else {
            console.log("ta bort vindskydd");
            activeSymbols = activeSymbols.filter(symbol => symbol !== "vindskydd"); //vad gör denna???
            vindskydd.src = "img/symbols/vindskydd-inv.png";
            console.log(activeSymbols);
        }
        filterResults(); //kör filterResults varje gång man klickar på en symbol
    });

    utegym.addEventListener("click", () => {
        console.log("gym");
        utegym.classList.toggle("active");
        if (utegym.classList.contains("active")) {
            activeSymbols.push("utegym");
            utegym.src = "img/symbols/utegym.png";
            console.log("lägg till utegym");
            console.log(activeSymbols);
        } else {
            console.log("ta bort utegym");
            activeSymbols = activeSymbols.filter(symbol => symbol !== "utegym");
            utegym.src = "img/symbols/utegym-inv.png";
            console.log(activeSymbols);
        }
        filterResults(); //kör filterResults varje gång man klickar på en symbol
    });

    rastplats.addEventListener("click", () => {
        console.log("bench");
        rastplats.classList.toggle("active");
        if (rastplats.classList.contains("active")) {
            activeSymbols.push("rastplats");
            rastplats.src = "img/symbols/rastplats.png";
            console.log("lägg till rastplats");
            console.log(activeSymbols);
        } else {
            console.log("ta bort rastplats");
            activeSymbols = activeSymbols.filter(symbol => symbol !== "rastplats");
            rastplats.src = "img/symbols/rastplats-inv.png";
            console.log(activeSymbols);
        }
        filterResults(); //kör filterResults varje gång man klickar på en symbol
    });

    fika.addEventListener("click", () => {
        console.log("cafe");
        fika.classList.toggle("active");
        if (fika.classList.contains("active")) {
            activeSymbols.push("fika");
            fika.src = "img/symbols/fika.png";
            console.log("lägg till fika");
            console.log(activeSymbols);
        } else {
            console.log("ta bort fika");
            activeSymbols = activeSymbols.filter(symbol => symbol !== "fika");
            fika.src = "img/symbols/fika-inv.png";
            console.log(activeSymbols);
        }
        filterResults(); //kör filterResults varje gång man klickar på en symbol
    });

    barnvagn.addEventListener("click", () => {
        console.log("stroller");
        barnvagn.classList.toggle("active");
        if (barnvagn.classList.contains("active")) {
            activeSymbols.push("barnvagn");
            barnvagn.src = "img/symbols/barnvagn.png";
            console.log("lägg till barnvagn");
            console.log(activeSymbols);
        } else {
            console.log("ta bort barnvagn");
            activeSymbols = activeSymbols.filter(symbol => symbol !== "barnvagn"); //vad gör denna???
            barnvagn.src = "img/symbols/barnvagn-inv.png";
            console.log(activeSymbols);
        }
        filterResults(); //kör filterResults varje gång man klickar på en symbol
    });

    rullstol.addEventListener("click", () => {
        console.log("wheelchair");
        rullstol.classList.toggle("active");
        if (rullstol.classList.contains("active")) {
            activeSymbols.push("rullstol");
            rullstol.src = "img/symbols/rullstol.png";
            console.log("lägg till rullstol");
            console.log(activeSymbols);
        } else {
            console.log("ta bort rullstol");
            activeSymbols = activeSymbols.filter(symbol => symbol !== "rullstol"); //vad gör denna???
            rullstol.src = "img/symbols/rullstol-inv.png";
            console.log(activeSymbols);
        }
        filterResults(); //kör filterResults varje gång man klickar på en symbol
    });

    toalett.addEventListener("click", () => {
        console.log("toilet");
        toalett.classList.toggle("active");
        if (toalett.classList.contains("active")) {
            activeSymbols.push("toalett");
            toalett.src = "img/symbols/toalett.png";
            console.log("lägg till toalett");
            console.log(activeSymbols);
        } else {
            console.log("ta bort toalett");
            activeSymbols = activeSymbols.filter(symbol => symbol !== "toalett"); //vad gör denna???
            toalett.src = "img/symbols/toalett-inv.png";
            console.log(activeSymbols);
        }
        filterResults(); //kör filterResults varje gång man klickar på en symbol
    });

    dass.addEventListener("click", () => {
        console.log("portapotty");
        dass.classList.toggle("active");
        if (dass.classList.contains("active")) {
            activeSymbols.push("dass");
            dass.src = "img/symbols/dass.png";
            console.log("lägg till dass");
            console.log(activeSymbols);
        } else {
            console.log("ta bort dass");
            activeSymbols = activeSymbols.filter(symbol => symbol !== "dass"); //vad gör denna???
            dass.src = "img/symbols/dass-inv.png";
            console.log(activeSymbols);
        }
        filterResults(); //kör filterResults varje gång man klickar på en symbol
    });

    parkering.addEventListener("click", () => {
        console.log("parking");
        parkering.classList.toggle("active");
        if (parkering.classList.contains("active")) {
            activeSymbols.push("parkering");
            parkering.src = "img/symbols/parkering.png";
            console.log("lägg till parkering");
            console.log(activeSymbols);
        } else {
            console.log("ta bort parkering");
            activeSymbols = activeSymbols.filter(symbol => symbol !== "parkering"); //vad gör denna???
            parkering.src = "img/symbols/parkering-inv.png";
            console.log(activeSymbols);
        }
        filterResults(); //kör filterResults varje gång man klickar på en symbol
    });
    //de ska söka gemensamt, så sök på alla som är aktiva
}