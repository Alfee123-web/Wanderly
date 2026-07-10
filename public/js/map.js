mapboxgl.accessToken = mapToken;

if (listing.geometry && Array.isArray(listing.geometry.coordinates) && listing.geometry.coordinates.length === 2) {

    const map = new mapboxgl.Map({
        container: 'map',
        style: "mapbox://styles/mapbox/streets-v12",
        center: listing.geometry.coordinates,
        zoom: 12
    });

    const marker = new mapboxgl.Marker({ color: "red" })
        .setLngLat(listing.geometry.coordinates)
        .setPopup(
            new mapboxgl.Popup({ offset: 25 }).setHTML(
                `<h4>${listing.title}</h4><p>Exact Location provided after booking</p>`
            )
        )
        .addTo(map);

} else {
    document.getElementById("map").innerHTML =
        "<p class='text-muted'>Map location not available for this listing.</p>";
}



