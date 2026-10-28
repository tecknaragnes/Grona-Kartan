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

    map.setView([1900, 2400], 1);
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