let places;
const response = await fetch("../places.json");
places = await response.json(); //hämtas med fetch

export const renderMap = () => {
    const map = L.map('map', {
        crs: L.CRS.Simple,
        minZoom: -2
        // startpunkt, min- och maxzoom
    });
    const bounds = [[0, 0], [3500, 4900]];
    let image = L.imageOverlay('../img/kartaFigma.png', bounds).addTo(map);
    map.fitBounds(bounds);

    const URHere = L.marker([1900, 2400]).addTo(map);

    for (let p of places) {
        let X = p.coordinates.X;
        let Y = p.coordinates.Y;
        let pinCoord = L.latLng([Y, X]);
        let myIcon = L.icon({
            iconUrl: `img/symbols/${p.symbols[0]}-pin.png`,
            iconSize: [50, 57],
            iconAnchor: [26, 50],
            shadowUrl: "img/pin-shadow.png",
            shadowSize: [47.5, 14.5],
            shadowAnchor: [15, 2],
            className: `${p.id}`
        });
        L.marker(pinCoord, { icon: myIcon }).addTo(map).bindPopup(p.name);
    }

    const trummenRuCoo = [
        [1420, 2730],
        [1520, 2730],
        [1590, 2650],
        [1700, 2680],
        [1700, 2720],
        [1520, 2930],
        [1300, 3000],
        [1260, 2990],
        [1370, 2730],
        [1420, 2730]
    ]
    const trummenRundan = L.polyline(trummenRuCoo, { color: "red" }).addTo(map);

    const tyrestaRuCoo = [
        [150, 4250],
        [280, 4270],
        [300, 4550],
        [260, 4700],
        [150, 4800],
        [100, 4730],
        [50, 4300],
        [150, 4250]
    ]
    const tyrestaRu = L.polyline(tyrestaRuCoo, { color: "blue" }).addTo(map);

    const drevRuCoo = [
        [3400, 700],
        [3370, 750],
        [3390, 860],
        [3200, 1050],
        [3000, 750],
        [3150, 740],
        [3350, 680],
        [3400, 700]
    ]
    const drevRu = L.polyline(drevRuCoo, { color: "green" }).addTo(map);
    //går det att klicka på pathen och då få upp samma som klicken på symbolen?

    // map.setView([1900, 2400], 1);
}

export const mapListeners = () => {
    //när man klickar på en pin, så ska det kortet bli markerat och hamna längst upp i listan.
    let mapPins = document.querySelectorAll(".leaflet-marker-icon");
    console.log(mapPins);
    for (let marker of mapPins) {
        marker.addEventListener("click", () => {
            console.log(marker);
            //kopppla index i mapPins till index i obejktlistan? och därifrån få sätt platskort 
            // nu finns id:et i klassnamnet, så det kanske går att hitta
        })
    }

}