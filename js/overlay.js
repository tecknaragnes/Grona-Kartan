const renderOverlayCard = (place) => {
    const overlayCard = document.createElement("div");
    overlayCard.classList.add("overlayCard");
    overlayCard.innerHTML = `
    <img class="overlayCard-img" src="${place.image}" alt="${place.name}">
    <div class="flex-overlayCard">
        <div>
            <h2>${place.name}</h2>
            <ul>
                <li>${place.type}</li>
                <li>${place.distance}</li>
                <li>Aktiiteter:
                    <ul><li>${place.activities[0]}</li>
                    <li>${place.activities[1]}</li>
                    <li>${place.activities[2]}</li></ul>
                </li>
            </ul>
        </div>
        <div class="flex-symbols">
            <img>
        </div>
    </div>
    <button class="overlayCard-btn">Läs mer</button>
    `
}