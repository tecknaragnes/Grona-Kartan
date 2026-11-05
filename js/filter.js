import { renderPlaceCard } from "./place-cards.js";
import { markerOpacity } from "./map.js";

let places;
const response = await fetch("places.json");
places = await response.json(); //hämtas med fetch 

const searchInput = document.getElementById("search-act");
const searchButton = document.getElementById("search-btn");
const deleteButton = document.getElementById("delete-btn");

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
    const visiblePlaceIds = new Set(results.map(p => p.id));
    markerOpacity(visiblePlaceIds); // ändra opacity på symbolerna som är aktiva, och de som inte är aktiva ska vara lite mer transparenta
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
    const lekplats = document.querySelector(".symbols.playground");
    const utegym = document.querySelector(".symbols.gym");
    const rastplats = document.querySelector(".symbols.bench");
    const fika = document.querySelector(".symbols.cafe");
    const barnvagn = document.querySelector(".symbols.stroller");
    const rullstol = document.querySelector(".symbols.wheelchair");
    const toalett = document.querySelector(".symbols.toilet");
    const dass = document.querySelector(".symbols.portapotty");
    const parkering = document.querySelector(".symbols.parking");


    naturreservat.addEventListener("click", () => {
        console.log("nature-reserve");
        naturreservat.classList.toggle("active");
        if (naturreservat.classList.contains("active")) {
            activeSymbols.push("nature-reserve");
            naturreservat.src = "img/symbols/nature-reserve.png"; // byt bild till den fyllda
            console.log(activeSymbols);

        } else {
            console.log("ta bort naturreservat");
            activeSymbols = activeSymbols.filter(symbol => symbol !== "nature-reserve"); //vad gör denna???
            console.log(activeSymbols);
            naturreservat.src = "img/symbols/nature-reserve-inv.png"; // gå tillbaka till den inverterade
        }
        filterResults(); //kör filterResults varje gång man klickar på en symbol
    });

    skog.addEventListener("click", () => {
        console.log("forest");
        skog.classList.toggle("active");
        if (skog.classList.contains("active")) {
            activeSymbols.push("forest");
            skog.src = "img/symbols/forest.png";
            console.log(activeSymbols);
        } else {
            console.log("ta bort skog");
            activeSymbols = activeSymbols.filter(symbol => symbol !== "forest"); //vad gör denna???
            skog.src = "img/symbols/forest-inv.png";
            console.log(activeSymbols);
        }
        filterResults(); //kör filterResults varje gång man klickar på en symbol
    });

    promenad.addEventListener("click", () => {
        console.log("path");
        promenad.classList.toggle("active");
        if (promenad.classList.contains("active")) {
            activeSymbols.push("path");
            promenad.src = "img/symbols/path.png";
            console.log("lägg till promenad");
            console.log(activeSymbols);
        } else {
            console.log("ta bort promenad");
            activeSymbols = activeSymbols.filter(symbol => symbol !== "path"); //vad gör denna???
            promenad.src = "img/symbols/path-inv.png";
            console.log(activeSymbols);
        }
        filterResults(); //kör filterResults varje gång man klickar på en symbol
    });

    fagelskadning.addEventListener("click", () => {
        console.log("bird");
        fagelskadning.classList.toggle("active");
        if (fagelskadning.classList.contains("active")) {
            activeSymbols.push("bird");
            fagelskadning.src = "img/symbols/bird.png";
            console.log("lägg till fågelskådning");
            console.log(activeSymbols);
        } else {
            console.log("ta bort fågelskådning");
            activeSymbols = activeSymbols.filter(symbol => symbol !== "bird");
            fagelskadning.src = "img/symbols/bird-inv.png";
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
            activeSymbols.push("garden");
            tradgard.src = "img/symbols/garden.png";
            console.log("lägg till trädgård");
            console.log(activeSymbols);
        } else {
            console.log("ta bort trädgård");
            activeSymbols = activeSymbols.filter(symbol => symbol !== "garden");
            tradgard.src = "img/symbols/garden-inv.png";
            console.log(activeSymbols);
        }
        filterResults(); //kör filterResults varje gång man klickar på en symbol
    });

    vatten.addEventListener("click", () => {
        console.log("lake");
        vatten.classList.toggle("active");
        if (vatten.classList.contains("active")) {
            activeSymbols.push("lake");
            vatten.src = "img/symbols/lake.png";
            console.log("lägg till vatten");
            console.log(activeSymbols);
        } else {
            console.log("ta bort vatten");
            activeSymbols = activeSymbols.filter(symbol => symbol !== "lake"); //vad gör denna???
            vatten.src = "img/symbols/lake-inv.png";
            console.log(activeSymbols);
        }
        filterResults(); //kör filterResults varje gång man klickar på en symbol
    });

    badplats.addEventListener("click", () => {
        console.log("beach");
        badplats.classList.toggle("active");
        if (badplats.classList.contains("active")) {
            activeSymbols.push("beach");
            badplats.src = "img/symbols/beach.png";
            console.log("lägg till badplats");
            console.log(activeSymbols);
        } else {
            console.log("ta bort badplats");
            activeSymbols = activeSymbols.filter(symbol => symbol !== "beach"); //vad gör denna???
            badplats.src = "img/symbols/beach-inv.png";
            console.log(activeSymbols);
        }
        filterResults(); //kör filterResults varje gång man klickar på en symbol
    });

    paddla.addEventListener("click", () => {
        console.log("canoe");
        paddla.classList.toggle("active");
        if (paddla.classList.contains("active")) {
            activeSymbols.push("canoe");
            paddla.src = "img/symbols/canoe.png";
            console.log("lägg till paddla");
            console.log(activeSymbols);
        } else {
            console.log("ta bort paddla");
            activeSymbols = activeSymbols.filter(symbol => symbol !== "canoe");
            paddla.src = "img/symbols/canoe-inv.png";
            console.log(activeSymbols);
        }
        filterResults(); //kör filterResults varje gång man klickar på en symbol
    });

    grillplats.addEventListener("click", () => {
        console.log("BBQ");
        grillplats.classList.toggle("active");
        if (grillplats.classList.contains("active")) {
            activeSymbols.push("bbq");
            grillplats.src = "img/symbols/bbq.png";
            console.log("lägg till grillplats");
            console.log(activeSymbols);
        } else {
            console.log("ta bort grillplats");
            activeSymbols = activeSymbols.filter(symbol => symbol !== "bbq"); //vad gör denna???
            grillplats.src = "img/symbols/bbq-inv.png";
            console.log(activeSymbols);
        }
        filterResults(); //kör filterResults varje gång man klickar på en symbol
    });

    vindskydd.addEventListener("click", () => {
        console.log("windShield");
        vindskydd.classList.toggle("active");
        if (vindskydd.classList.contains("active")) {
            activeSymbols.push("wind-shield");
            vindskydd.src = "img/symbols/wind-shield.png";
            console.log("lägg till vindskydd");
            console.log(activeSymbols);
        } else {
            console.log("ta bort vindskydd");
            activeSymbols = activeSymbols.filter(symbol => symbol !== "wind-shield"); //vad gör denna???
            vindskydd.src = "img/symbols/wind-shield-inv.png";
            console.log(activeSymbols);
        }
        filterResults(); //kör filterResults varje gång man klickar på en symbol
    });

    utegym.addEventListener("click", () => {
        console.log("gym");
        utegym.classList.toggle("active");
        if (utegym.classList.contains("active")) {
            activeSymbols.push("gym");
            utegym.src = "img/symbols/gym.png";
            console.log("lägg till utegym");
            console.log(activeSymbols);
        } else {
            console.log("ta bort utegym");
            activeSymbols = activeSymbols.filter(symbol => symbol !== "gym");
            utegym.src = "img/symbols/gym-inv.png";
            console.log(activeSymbols);
        }
        filterResults(); //kör filterResults varje gång man klickar på en symbol
    });

    lekplats.addEventListener("click", () => {
        console.log("playground");
        lekplats.classList.toggle("active");
        if (lekplats.classList.contains("active")) {
            activeSymbols.push("playground");
            lekplats.src = "img/symbols/playground.png";
            console.log("lägg till lekplats");
            console.log(activeSymbols);
        } else {
            console.log("ta bort lekplats");
            activeSymbols = activeSymbols.filter(symbol => symbol !== "playground");
            lekplats.src = "img/symbols/playground-inv.png";
            console.log(activeSymbols);
        }
        filterResults(); //kör filterResults varje gång man klickar på en symbol
    });

    rastplats.addEventListener("click", () => {
        console.log("bench");
        rastplats.classList.toggle("active");
        if (rastplats.classList.contains("active")) {
            activeSymbols.push("bench");
            rastplats.src = "img/symbols/bench.png";
            console.log("lägg till rastplats");
            console.log(activeSymbols);
        } else {
            console.log("ta bort rastplats");
            activeSymbols = activeSymbols.filter(symbol => symbol !== "bench");
            rastplats.src = "img/symbols/bench-inv.png";
            console.log(activeSymbols);
        }
        filterResults(); //kör filterResults varje gång man klickar på en symbol
    });

    fika.addEventListener("click", () => {
        console.log("cafe");
        fika.classList.toggle("active");
        if (fika.classList.contains("active")) {
            activeSymbols.push("cafe");
            fika.src = "img/symbols/cafe.png";
            console.log("lägg till fika");
            console.log(activeSymbols);
        } else {
            console.log("ta bort fika");
            activeSymbols = activeSymbols.filter(symbol => symbol !== "cafe");
            fika.src = "img/symbols/cafe-inv.png";
            console.log(activeSymbols);
        }
        filterResults(); //kör filterResults varje gång man klickar på en symbol
    });

    barnvagn.addEventListener("click", () => {
        console.log("stroller");
        barnvagn.classList.toggle("active");
        if (barnvagn.classList.contains("active")) {
            activeSymbols.push("stroller");
            barnvagn.src = "img/symbols/stroller.png";
            console.log("lägg till barnvagn");
            console.log(activeSymbols);
        } else {
            console.log("ta bort barnvagn");
            activeSymbols = activeSymbols.filter(symbol => symbol !== "stroller"); //vad gör denna???
            barnvagn.src = "img/symbols/stroller-inv.png";
            console.log(activeSymbols);
        }
        filterResults(); //kör filterResults varje gång man klickar på en symbol
    });

    rullstol.addEventListener("click", () => {
        console.log("wheelchair");
        rullstol.classList.toggle("active");
        if (rullstol.classList.contains("active")) {
            activeSymbols.push("wheelchair");
            rullstol.src = "img/symbols/wheelchair.png";
            console.log("lägg till rullstol");
            console.log(activeSymbols);
        } else {
            console.log("ta bort rullstol");
            activeSymbols = activeSymbols.filter(symbol => symbol !== "wheelchair"); //vad gör denna???
            rullstol.src = "img/symbols/wheelchair-inv.png";
            console.log(activeSymbols);
        }
        filterResults(); //kör filterResults varje gång man klickar på en symbol
    });

    toalett.addEventListener("click", () => {
        console.log("toilet");
        toalett.classList.toggle("active");
        if (toalett.classList.contains("active")) {
            activeSymbols.push("toilet");
            toalett.src = "img/symbols/toilet.png";
            console.log("lägg till toalett");
            console.log(activeSymbols);
        } else {
            console.log("ta bort toalett");
            activeSymbols = activeSymbols.filter(symbol => symbol !== "toilet"); //vad gör denna???
            toalett.src = "img/symbols/toilet-inv.png";
            console.log(activeSymbols);
        }
        filterResults(); //kör filterResults varje gång man klickar på en symbol
    });

    dass.addEventListener("click", () => {
        console.log("portapotty");
        dass.classList.toggle("active");
        if (dass.classList.contains("active")) {
            activeSymbols.push("portapotty");
            dass.src = "img/symbols/portapotty.png";
            console.log("lägg till dass");
            console.log(activeSymbols);
        } else {
            console.log("ta bort dass");
            activeSymbols = activeSymbols.filter(symbol => symbol !== "portapotty"); //vad gör denna???
            dass.src = "img/symbols/portapotty-inv.png";
            console.log(activeSymbols);
        }
        filterResults(); //kör filterResults varje gång man klickar på en symbol
    });

    parkering.addEventListener("click", () => {
        console.log("parking");
        parkering.classList.toggle("active");
        if (parkering.classList.contains("active")) {
            activeSymbols.push("parking");
            parkering.src = "img/symbols/parking.png";
            console.log("lägg till parkering");
            console.log(activeSymbols);
        } else {
            console.log("ta bort parkering");
            activeSymbols = activeSymbols.filter(symbol => symbol !== "parking"); //vad gör denna???
            parkering.src = "img/symbols/parking-inv.png";
            console.log(activeSymbols);
        }
        filterResults(); //kör filterResults varje gång man klickar på en symbol
    });
    //de ska söka gemensamt, så sök på alla som är aktiva
}

deleteButton.addEventListener("click", () => {
    searchInput.value = "";
    activeSymbols = [];
    // alla symboler ska gå tillbaka till den inverterade bilden
    const allSymbols = document.querySelectorAll(".symbols");
    allSymbols.forEach(symbol => {
        symbol.classList.remove("active");
        const symbolName = symbol.classList[1];
        symbol.src = `img/symbols/${symbolName}-inv.png`;
    });
    filterResults(); // nu renderas alla kort igen, och symbolerna på kartan
});