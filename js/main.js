import { renderMap } from './map.js';
import { renderPlaceCard } from './place-cards.js';
import { listeners } from './filter.js';

renderMap();

let places;
try { // Använd try/catch i fetch
    const response = await fetch("../places.json");
    places = await response.json(); //hämtas med fetch 
    console.log("json fetch"); //denna funkar
}
catch (err) {
    // errorMsgSpan.style.visibility = "visible";
    // errorMsgSpan.textContent = "Ett fel har uppstått! 👻 Spöken har fastnat någonstans på hemsidan, så försök igen senare. "
    // errorMsgSpan.textContent += `(${err.message})`;
    //felmeddelande om husen inte laddas/hämtas
}

renderPlaceCard(places); // Visa första platsen

listeners();