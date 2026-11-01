import { renderDetails } from "./details.js";

const cardHolder = document.querySelector(".cards-holder");

export const renderPlaceCard = (place) => {
    cardHolder.innerHTML = ""; // Clear previous cards, den funkar

    for (let p of place) {
        const placeCard = document.createElement("div");
        placeCard.classList.add("place-card");
        placeCard.dataset.placeId = p.id;

        placeCard.innerHTML = `
            <img class="place-card-img" src="${p.thumbnail}.jpg" alt="">
            <div class="place-card-info">
                <h2>${p.name}</h2>
                <p>${p.type}</p>
                <p class="place-distance">km bort</p>
                <div class="place-card-symbols"></div>
            </div>`;
        cardHolder.append(placeCard);

        const distanceElement = placeCard.querySelector(".place-distance");
        const distance = Math.sqrt(Math.pow(p.coordinates.X - 2400, 2) + Math.pow(p.coordinates.Y - 1900, 2)) * 0.004;
        distanceElement.textContent = `${distance.toFixed(2)} km bort`;

        const symbolContainer = placeCard.querySelector(".place-card-symbols");
        const symbols = p.symbols;
        for (let s of symbols) {
            let symb = document.createElement("img");
            symb.src = `img/symbols/${s}.png`;
            symb.alt = `${s}`;
            symbolContainer.append(symb);
        }

        placeCard.addEventListener("click", () => renderDetails(p)); // När kortet klickas, rendera detaljerna för den platsen
    }
}

export const highlightPlaceCard = (placeId) => {
    const card = cardHolder.querySelector(`[data-place-id="${placeId}"]`);
    if (!card) return;

    cardHolder.querySelector(".place-card--highlighted")
        ?.classList.remove("place-card--highlighted");

    card.classList.add("place-card--highlighted");
    card.scrollIntoView({ behavior: "smooth", block: "start" });
}

// document.addEventListener("click", (event) => {
//     if (event.target.closest(".place-card, #map")) return;

//     cardHolder.querySelector(".place-card--highlighted")
//         ?.classList.remove("place-card--highlighted");
// });