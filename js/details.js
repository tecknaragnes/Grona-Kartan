let places;
const response = await fetch("../places.json");
places = await response.json(); //hämtas med fetch

const startDiv = document.getElementById("start-div");
const detailDiv = document.getElementById("detail-div");

export const renderDetails = (p) => {
    startDiv.style.display = "none";
    detailDiv.style.display = "block";
    detailDiv.innerHTML = ""; // Clear previous details
    // ska man göra detaljsidan bredare? asså att den tar upp mer av skärmen

    detailDiv.innerHTML = `
    <header>
        <img src="img/svg/close.svg" alt="close" id="closeBtn">
        <img src="img/symbols/${p.symbols[0]}.png" alt="Se alla ${p.type}" id="main-symbol">
        <div class="name-container">
            <h1>${p.name}</h1>
            <h2>${p.type}</h2>
        </div>
    </header>

    <section class="detail-info">
        <div id="detail-img-container">
            
        </div>
        <p>${p.description}</p>
    </section>

    <section class="short-info">
        <div class="banner bann-symbols"></div>
        <div class="banner bann-transport">
            <img src="img/symbols/buss.png" alt="Buss" class="transport-symbol">
            <p>Busslinje ${p.transport.line}</p>
            <p>${p.transport.stop}</p>
        </div>
    </section>

    <section class="trivia">
    </section>`;
    // <img src="${p.detailIMG}.jpg" alt="">

    const closeBtn = document.getElementById("closeBtn"); // lyssna på klick på krysset
    closeBtn.addEventListener("click", () => {
        startDiv.style.display = "block";
        detailDiv.style.display = "none";
    });
}