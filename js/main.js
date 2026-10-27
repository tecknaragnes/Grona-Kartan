import { renderMap } from './map.js';
import { renderPlaceCard } from './place-cards.js';
import { listeners } from './filter.js';

renderMap();

let places;
const response = await fetch("../places.json");
places = await response.json(); //hämtas med fetch 
console.log("json fetch"); //denna funkar

renderPlaceCard(places); // Visa första platsen

listeners();