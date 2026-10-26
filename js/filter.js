export const listeners = () => {
    const natureReserve = document.querySelector(".symbols.nature-reserve");
    const forest = document.querySelector(".symbols.forest");
    const lake = document.querySelector(".symbols.lake");
    const beach = document.querySelector(".symbols.beach");
    const path = document.querySelector(".symbols.path");
    const BBQ = document.querySelector(".symbols.bbq");
    const windShield = document.querySelector(".symbols.wind-shield");
    const stroller = document.querySelector(".symbols.stroller");
    const wheelchair = document.querySelector(".symbols.wheelchair");
    const toilet = document.querySelector(".symbols.toilet");
    const portapotty = document.querySelector(".symbols.portapotty");
    const parking = document.querySelector(".symbols.parking");

    natureReserve.addEventListener("click", () => {
        console.log("natureReserve");
        natureReserve.classList.toggle("active");
    });

    forest.addEventListener("click", () => {
        console.log("forest");
        forest.classList.toggle("active");
    });

    lake.addEventListener("click", () => {
        console.log("lake");
        lake.classList.toggle("active");
    });

    beach.addEventListener("click", () => {
        console.log("beach");
        beach.classList.toggle("active");
    });

    path.addEventListener("click", () => {
        console.log("path");
        path.classList.toggle("active");
    });

    BBQ.addEventListener("click", () => {
        console.log("BBQ");
        BBQ.classList.toggle("active");
    });

    windShield.addEventListener("click", () => {
        console.log("windShield");
        windShield.classList.toggle("active");
    });

    stroller.addEventListener("click", () => {
        console.log("stroller");
        stroller.classList.toggle("active");
    });

    wheelchair.addEventListener("click", () => {
        console.log("wheelchair");
        wheelchair.classList.toggle("active");
    });

    toilet.addEventListener("click", () => {
        console.log("toilet");
        toilet.classList.toggle("active");
    });

    portapotty.addEventListener("click", () => {
        console.log("portapotty");
        portapotty.classList.toggle("active");
    });

    parking.addEventListener("click", () => {
        console.log("parking");
        parking.classList.toggle("active");
    });

    //de ska söka gemensamt, så sök på alla som är aktiva
}