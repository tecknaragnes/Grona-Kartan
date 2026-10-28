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
    var image = L.imageOverlay('../img/kartaFigma.png', bounds).addTo(map);
    map.fitBounds(bounds);

    for (let p of places) {
        let X = p.coordinates.X;
        let Y = p.coordinates.Y;
        let pinCoord = L.latLng([Y, X]);
        let myIcon = L.icon({
            iconUrl: `img/symbols/${p.symbols[0]}.png`,
            iconSize: [50, 50],
            // popupAnchor: [-3, -76] //utgår från pin:en
        })
        L.marker(pinCoord, { icon: myIcon }).addTo(map).bindPopup(p.name);
    }

    map.setView([1900, 2400], 1);
}