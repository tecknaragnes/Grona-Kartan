const cardHolder = document.querySelector(".cards-holder");

export const renderPlaceCard = (place) => {
    console.log("place"); //den funkar
    cardHolder.innerHTML = ""; // Clear previous cards, den funkar

    for (let p of place) {
        const placeCard = document.createElement("div");
        placeCard.classList.add("place-card");
        placeCard.innerHTML = `
            <img class="place-card-img" src="${p.thumbnail}.jpg" alt="">
            <div class="place-card-info">
                <div>
                    <h2>${p.name}</h2>
                    <p>${p.type}</p>
                    <p>${p.distance} km bort</p>
                    <div class="place-card-symbols"></div>
                </div>`;
        cardHolder.append(placeCard);
    }
}