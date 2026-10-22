export const renderPlaceCard = (place) => {
    console.log("place");
    const overlayCard = document.createElement("div");
    overlayCard.classList.add("place-card");
    overlayCard.innerHTML = `
        <img class="place-card-img" src="${place.image}" alt="">
        <div class="place-card-info">
            <div>
                <h2>${place.name}</h2>
                <p>${place.type}</p>
                <p>${place.distance}</p>
                <div class="place-card-symbols"></div>
            </div>
    `;
}