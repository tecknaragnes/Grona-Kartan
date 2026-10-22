export const renderMap = () => {
    var map = L.map('map', {
        crs: L.CRS.Simple,
        minZoom: -2
        // startpunkt, min- och maxzoom
    });
    var bounds = [[0, 0], [3500, 4900]];
    var image = L.imageOverlay('../img/kartaFigma.png', bounds).addTo(map);
    map.fitBounds(bounds);
}