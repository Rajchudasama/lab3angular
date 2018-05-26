var map;
var index = 0;
var coolocation = [];
var MapMarker = /** @class */ (function () {
    function MapMarker(address) {
        this.address = address;
    }
    ;
    return MapMarker;
}());
var LatLngValue = {
    lat: 43,
    lng: -79.38
};
var initMapConfig = { center: LatLngValue, zoom: 8 };
$.ajax({
    url: './locations.json',
    datatype: 'json',
    success: function (data) {
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var cl = data_1[_i];
            var newcoolocation = new MapMarker(cl.address);
            coolocation.push(newcoolocation);
        }
    }
});
function loadmap() {
    map = new google.maps.Map(document.getElementById("displaymap"), initMapConfig);
    addMarker(LatLngValue);
    GetCordinate("1 Yonge Street Toronto, Ontario, Canada");
    function GetCordinate(address) {
        var geoCoder = new google.maps.Geocoder();
        geoCoder.geocode({ 'address': address }, function (data, status) {
            if (status === 'OK') {
                //console.log('lat: '+ data[0].geometry.location.lat());
                //console.log('lng: '+ data[0].geometry.location.lng());
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
