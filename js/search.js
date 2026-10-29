// Du kan göra sökningen som en funktion som får listan med platser och söktexten, och returnerar bara de platser där texten matchar namn, aktivitet, typ eller undertyp. En söktext som skog hittar till exempel en plats om ordet finns i något av de fälten.

// I search.js kan du skriva själva sökfunktionen:

// const normalize = (text) =>
//     text
//         .normalize("NFD")
//         .replace(/[\u0300-\u036f]/g, "")
//         .toLocaleLowerCase("sv");

// export const searchPlaces = (places, query) => {
//     const searchTerm = normalize(query.trim());

//     if (!searchTerm) return places;

//     return places.filter((place) => {
//         const searchableFields = [
//             place.name,
//             place.type,
//             ...place.activities,
//             ...place.subtype
//         ];

//         return searchableFields.some((field) =>
//             normalize(field).includes(searchTerm)
//         );
//     });
// };

// normalize gör sökningen okänslig för stora och små bokstäver och låter exempelvis tradgard matcha trädgård.

// Eftersom filter.js redan hanterar symbolfiltren, är det bäst att kombinera text- och symbolfiltren där. Då försvinner inte symbolfiltren när användaren söker. Importera funktionen:

// Lägg till ett sökord nära activeSymbols:

// const filterResults = () => {
//     const symbolFiltered = places.filter((place) =>
//         activeSymbols.every((symbol) => place.symbols.includes(symbol))
//     );

//     renderPlaceCard(searchPlaces(symbolFiltered, searchQuery));
// };

// Till sist kan du koppla sökfältet och knappen till funktionen inuti listeners():

// const searchInput = document.getElementById("search-act");
// const searchButton = document.getElementById("search-btn");

// const runSearch = () => {
//     searchQuery = searchInput.value;
//     filterResults();
// };

// searchInput.addEventListener("input", runSearch);
// searchButton.addEventListener("click", runSearch);

// Fältet och knappen finns redan i index.html. Med input-händelsen uppdateras resultaten medan användaren skriver; knappen kör samma sökning när den klickas.

