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