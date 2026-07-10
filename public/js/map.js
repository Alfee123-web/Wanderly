mapboxgl.accessToken = mapToken;


if (typeof coordinates !== "undefined" && Array.isArray(coordinates) && coordinates.length === 2) {

    const map = new mapboxgl.Map({
        container: 'map',
        style: "mapbox://styles/mapbox/streets-v12",
        center: coordinates, // Corrected
        zoom: 12
    });

    const marker = new mapboxgl.Marker({ color: "red" })
        .setLngLat(coordinates) // Corrected
        .setPopup(
            new mapboxgl.Popup({ offset: 25 }).setHTML(
                `<h4>${listingTitle}</h4><p>Exact Location provided after booking</p>` // Corrected
            )
        )
        .addTo(map);

} else {
    document.getElementById("map").innerHTML =
        "<p class='text-muted p-3'>Map location not available for this listing.</p>";
}


