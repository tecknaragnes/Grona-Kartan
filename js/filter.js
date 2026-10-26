let places;
const response = await fetch("../places.json");
places = await response.json(); //hämtas med fetch 

let activeSymbols = [];

const filterResults = () => {
    let filtered;

    // gör en array med alla symboler, gå sedan igenom den en och en och 
    // kolla vilka som är aktiva (söka klass)
    // filtrera utifrån "symbols" i objekten
}

export const listeners = () => {
    const naturreservat = document.querySelector(".symbols.nature-reserve");
    const skog = document.querySelector(".symbols.forest");
    const vatten = document.querySelector(".symbols.lake");
    const badplats = document.querySelector(".symbols.beach");
    const promenad = document.querySelector(".symbols.path");
    const grillplats = document.querySelector(".symbols.bbq");
    const vindskydd = document.querySelector(".symbols.wind-shield");
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
            // byt bild till den inverterade
        } else {
            activeSymbols = activeSymbols.filter(symbol => symbol !== "naturreservat"); //vad gör denna???
        }
    });

    skog.addEventListener("click", () => {
        console.log("forest");
        skog.classList.toggle("active");
    });

    vatten.addEventListener("click", () => {
        console.log("lake");
        vatten.classList.toggle("active");
    });

    badplats.addEventListener("click", () => {
        console.log("beach");
        badplats.classList.toggle("active");
    });

    promenad.addEventListener("click", () => {
        console.log("path");
        promenad.classList.toggle("active");
    });

    grillplats.addEventListener("click", () => {
        console.log("BBQ");
        grillplats.classList.toggle("active");
    });

    vindskydd.addEventListener("click", () => {
        console.log("windShield");
        vindskydd.classList.toggle("active");
    });

    barnvagn.addEventListener("click", () => {
        console.log("stroller");
        barnvagn.classList.toggle("active");
    });

    rullstol.addEventListener("click", () => {
        console.log("wheelchair");
        rullstol.classList.toggle("active");
    });

    toalett.addEventListener("click", () => {
        console.log("toilet");
        toalett.classList.toggle("active");
    });

    dass.addEventListener("click", () => {
        console.log("portapotty");
        dass.classList.toggle("active");
    });

    parkering.addEventListener("click", () => {
        console.log("parking");
        parkering.classList.toggle("active");
    });

    //de ska söka gemensamt, så sök på alla som är aktiva
}