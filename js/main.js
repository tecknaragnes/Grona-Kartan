import { renderMap } from './map.js';
import { renderPlaceCard } from './place-cards.js';
import { listeners } from './filter.js';
import { setMap } from './details.js';

const startDiv = document.getElementById("start-div");
const detailDiv = document.getElementById("detail-div");
detailDiv.style.display = "none"; // Visa startdiv och dölj detaildiv vid sidladdning

const map = renderMap();
setMap(map);

let places;
const response = await fetch("places.json");
places = await response.json(); //hämtas med fetch

renderPlaceCard(places); // Visa platserna i sidofliken

listeners();

const infoBtn = document.getElementById("info-btn");
const infoDiv = document.getElementById("info-div");
// infoDiv.style.display = "none"; // Dölj info-div vid sidladdning

let infoTimer = setTimeout(() => {
    infoDiv.style.display = "none";
}, 10000); // Dölj info-div efter 10 sekunder

infoBtn.addEventListener("click", () => {
    clearTimeout(infoTimer); // Stoppa timern när knappen klickas
    infoTimer = null; // Nollställ timern

    console.log("Info-knappen klickad");
    infoDiv.style.display = infoDiv.style.display === "none" ? "block" : "none"; // Växla visning av info-div
});