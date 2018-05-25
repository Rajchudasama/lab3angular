var map;
var LatLngValue = {
    lat: 43,
    lng: -79.38
};
var initMapConfig = { center: LatLngValue, zoom: 8 };
function loadmap() {
    map = new google.maps.Map(document.getElementById("displaymap"), initMapConfig);
}
