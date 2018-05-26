var map;
var LatLngValue = {
    lat: 43,
    lng: -79.38
};
var initMapConfig = { center: LatLngValue, zoom: 8 };
function loadmap() {
    map = new google.maps.Map(document.getElementById("displaymap"), initMapConfig);
    addMarker(LatLngValue);
    GetCordinate("1 Yonge Street Toronto, Ontario, Canada");
    function GetCordinate(address) {
        var geoCoder = new google.maps.Geocoder();
        geoCoder.geocode({ 'address': address }, function (data, status) {
            if (status === 'OK') {
                console.log('lat: ' + data[0].geometry.location.lat());
                console.log('lng: ' + data[0].geometry.location.lng());
            }
        });
    }
    function addMarker(coord) {
        var newMarker = new google.maps.Marker({
            position: coord,
            map: map,
            title: "cool places"
        });
    }
}
