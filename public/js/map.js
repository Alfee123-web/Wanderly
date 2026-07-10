
const mapEl = document.getElementById("map");


const mapToken = mapEl.dataset.token;
const coordinates = JSON.parse(mapEl.dataset.coordinates);
const listingTitle = mapEl.dataset.title;

mapboxgl.accessToken = mapToken;


if (mapToken && Array.isArray(coordinates) && coordinates.length === 2) {
    const map = new mapboxgl.Map({
        container: 'map',
        style: "mapbox://styles/mapbox/streets-v12",
        center: coordinates,
        zoom: 12
    });

    new mapboxgl.Marker({ color: "red" })
        .setLngLat(coordinates)
        .setPopup(
            new mapboxgl.Popup({ offset: 25 }).setHTML(
                `<h4>${listingTitle}</h4><p>Exact Location provided after booking</p>`
            )
        )
        .addTo(map);
} else {
    mapEl.innerHTML = "<p class='text-muted p-3'>Map location not available for this listing.</p>";
}

