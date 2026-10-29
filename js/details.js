let places;
const response = await fetch("../places.json");
places = await response.json(); //hämtas med fetch

const response2 = await fetch("../trivia.json");
const triviaItems = await response2.json();
const triviaByName = new Map(triviaItems.map(item => [item.name, item]));
console.log(triviaItems);
console.log(triviaByName);

const startDiv = document.getElementById("start-div");
const detailDiv = document.getElementById("detail-div");

export const renderDetails = (p) => {
    startDiv.style.display = "none";
    detailDiv.style.display = "block";
    detailDiv.innerHTML = ""; // Clear previous details
    const body = document.querySelector("body");
    body.style.gridTemplateColumns = "1fr 1fr"; // ska man göra detaljsidan bredare? asså att den tar upp mer av skärmen
    // map.setView([p.coordinates.X, p.coordinates.Y], 1); // denna funkar inte här inne

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
            <img src="${p.detailIMG}.jpg" alt="">
        </div>
        <p>${p.description}</p>
    </section>

    <section class="short-info">
        <div class="banner bann-symbols"></div>
        <div class="banner bann-transport">
            <div class="transport bus">
                <img src="img/symbols/buss.png" alt="Buss" class="transport-symbol">
                <p>Busslinje ${p.transport.line}</p>
                <p>${p.transport.stop}</p>
            </div>
            <div class="transport bike">
                <img src="img/symbols/cykel.png" alt="Cykel" class="transport-symbol">
                <p>10 min</p>
            </div>
        </div>
    </section>

    <section class="trivia">
        <div>
            <div class="trivia-img-cont"></div>
            <h3></h3>
            <p class="trivia-animal"></p>
        </div>
        <div>
            <div class="trivia-img-cont"></div>
            <h3></h3>
            <p class="trivia-plant"></p>
        </div>
        <div>
            <div class="trivia-img-cont"></div>
            <h3></h3>
            <p class="trivia-place"></p>
        </div>
    </section>`;

    const symbolField = document.querySelector(".bann-symbols");
    const symbols = p.symbols;
    for (let s of symbols) {
        let symb = document.createElement("img");
        symb.src = `img/symbols/${s}.png`;
        symb.alt = `${s}`;
        symbolField.append(symb);
    }

    const animal = triviaByName.get(p.fauna);
    const plant = triviaByName.get(p.flora);

    const fillTriviaCard = (card, item) => {
        // if (!item) {
        //     card.hidden = true;
        //     return;
        // }
        card.querySelector("h3").textContent = item.showName;
        card.querySelector("p").textContent = item.description;
        // const imageContainer = document.querySelector(".trivia-img-cont");

        const image = document.createElement("img");
        image.src = item.img;
        image.alt = item.showName;
        // imageContainer.append(image);
        card.querySelector(".trivia-img-cont").replaceChildren(image);
    };
    const cards = detailDiv.querySelectorAll(".trivia > div");
    fillTriviaCard(cards[0], animal);
    fillTriviaCard(cards[1], plant);
    if (p.type == "Naturreservat") { //om type är naturreservat ska det vara naturreservat på sista kortet, annars allemnasrätt
        fillTriviaCard(cards[2], triviaItems[18]);
    } else {
        fillTriviaCard(cards[2], triviaItems[19]);
    }

    const closeBtn = document.getElementById("closeBtn"); // lyssna på klick på krysset
    closeBtn.addEventListener("click", () => {
        startDiv.style.display = "block";
        detailDiv.style.display = "none";
        body.style.gridTemplateColumns = "1fr 2fr";
    });
}