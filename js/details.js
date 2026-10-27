//importera en funktion för att rendera detaljsidan i fliken

let placeID;
const urlParams = new URLSearchParams(window.location.search);
const urlId = urlParams.get("id"); // Plats-id skall läsas av från URL:en.
placeID = places.find(p => p.id == urlId) // Använd plats-id tillsammans med Array.find() för att hitta rätt plats i datan.
// renderDetail(placeID);