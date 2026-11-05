let places;
const response = await fetch("places.json");
places = await response.json(); //hämtas med fetch

const response2 = await fetch("trivia.json");
const triviaItems = await response2.json();
const triviaByName = new Map(triviaItems.map(item => [item.name, item]));
// console.log(triviaItems);
// console.log(triviaByName);

let map;
export const setMap = (mapInstance) => {
    map = mapInstance;
}

const startDiv = document.getElementById("start-div");
const detailDiv = document.getElementById("detail-div");

export const renderDetails = (p) => {
    startDiv.style.display = "none";
    detailDiv.style.display = "block";
    detailDiv.innerHTML = ""; // Clear previous details
    const body = document.querySelector("body");
    body.style.gridTemplateColumns = "1fr 1fr"; // ska man göra detaljsidan bredare? asså att den tar upp mer av skärmen
    map.setView([p.coordinates.Y, p.coordinates.X], 0);

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
                <img src="img/symbols/bus.png" alt="Buss" class="transport-symbol">
                <p>Busslinje ${p.transport.line}, ${p.transport.stop}</p>
            </div>
            <div class="transport bike">
                <img src="img/symbols/bike.png" alt="Cykel" class="transport-symbol">
                <p class="bike-time">10 min</p>
            </div>
        </div>
        <div class="banner bann-terrain"></div>
        <div class="banner bann-distance"></div>
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

    const bikeTimeElement = document.querySelector(".bike-time");
    const bikeTime = Math.sqrt(Math.pow(p.coordinates.X - 2400, 2) + Math.pow(p.coordinates.Y - 1900, 2)) * 0.004 * 12;
    bikeTimeElement.textContent = `ca ${bikeTime.toFixed(0)} min`;

    const terrainElement = document.querySelector(".bann-terrain");
    const terrainArray = ["Lätt terräng", "Medel terräng", "Svår terrräng"];
    let terrainValue = p.terrain - 1;
    terrainElement.innerHTML = `<img src="img/svg/landscape.svg" alt=""> <p>${terrainArray[terrainValue]}</p>`;

    for (let i = 0; i < p.terrain; i++) {
        const terrainIcon = document.createElement("img");
        terrainIcon.src = "img/svg/square.svg";
        terrainIcon.alt = "";
        terrainElement.append(terrainIcon);
    }
    for (let i = p.terrain; i < 3; i++) {
        const terrainIcon = document.createElement("img");
        terrainIcon.src = "img/svg/box.svg";
        terrainIcon.alt = "";
        terrainElement.append(terrainIcon);
    }

    const distanceElement = document.querySelector(".bann-distance");
    const distance = Math.sqrt(Math.pow(p.coordinates.X - 2400, 2) + Math.pow(p.coordinates.Y - 1900, 2)) * 0.004;
    distanceElement.innerHTML = `<p>${distance.toFixed(2)} km ifrån skärmen</p>`;

    const animal = triviaByName.get(p.fauna);
    const plant = triviaByName.get(p.flora);
    let audio;

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

        if (item.name === "bluetit" || item.name === "mallard" || item.name === "heron" || item.name === "greattit" || item.name === "swan" || item.name === "woodpecker") {
            const soundDiv = document.createElement("div");
            soundDiv.classList.add("sound-div");

            const controlContainer = document.createElement("div");
            controlContainer.classList.add("control-container");

            const audioSymbol = document.createElement("img");
            audioSymbol.src = "img/symbols/birdcall.png";
            audioSymbol.alt = "Lyssna på fågeln";
            controlContainer.append(audioSymbol);

            audio = document.createElement("audio");
            audio.src = item.audio;

            const soundText = document.createElement("p");
            soundText.textContent = "Lyssna på fågeln";

            soundDiv.append(controlContainer, soundText);
            card.append(soundDiv);
            audioSymbol.addEventListener("click", () => {
                if (audio.paused) {
                    audio.play();
                    audioSymbol.src = "img/symbols/birdcall-pause.png";
                    audioSymbol.alt = "Pausa ljudet";
                    soundText.textContent = "Lyssnar...";
                } else {
                    audio.pause();
                    audioSymbol.src = "img/symbols/birdcall.png";
                    audioSymbol.alt = "Lyssna på fågeln";
                    soundText.textContent = "Lyssna på fågeln";
                }
            });
        }
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
        if (audio) {
            audio.pause();
            audio.currentTime = 0;
        }
    });
}