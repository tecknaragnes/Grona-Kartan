let places;
const response = await fetch("../places.json");
places = await response.json(); //hämtas med fetch

const startDiv = document.getElementById("start-div");
const detailDiv = document.getElementById("detail-div");

export const renderDetails = (p) => {
    startDiv.style.display = "none";
    detailDiv.style.display = "block";
    detailDiv.innerHTML = ""; // Clear previous details

    detailDiv.innerHTML = `
    <header>
    <img src="img/svg/close.svg" alt="close" id="closeBtn">
    <img src="img/symbols/${p.symbols[0]}.png" alt="Se alla ${p.type}">
        <h2>${p.name}</h2>
        <p>${p.type}</p>
    </header>
    <section>
        <img src="${p.detailIMG}.jpg" alt="">
        <p>${p.description}</p>
    </section>
    <section class="short-info">
    </section>
    <section class="trivia">
    </section>`;
    //sätt den viktigaste symbolen först i varje objekt så att denna blir korrekt 
}