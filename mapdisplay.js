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
window.onload = function () {
    addGeocoderMarker();
};
function loadmap() {
    var geocoder = new google.maps.Geocoder();
    map = new google.maps.Map(document.getElementById("displaymap"), initMapConfig);
    // addMarker(LatLngValue);
    //GetCordinate("1 Yonge Street Toronto, Ontario, Canada");
}
/* function GetCordinate(address:string):LatLng{
     let geoCoder:object = new google.maps.Geocoder();

     geoCoder.geocode({'address':address},function(data,status){
         if(status==='OK'){
             //console.log('lat: '+ data[0].geometry.location.lat());
             //console.log('lng: '+ data[0].geometry.location.lng());
         }
     });
 }*/
function addGeocoderMarker() {
    var responselatlng = { lat: 0, lng: 0 };
    geocoder = new google.maps.Geocoder();
    if (index < coolocation.length) {
        console.log(index);
        var address = coolocation[index].address;
        geocoder.geocode({ 'address': address }, function (results, status) {
            if (status == 'OK') {
                index++;
                responselatlng.lat = results[0].geometry.location.lat();
                responselatlng.lng = results[0].geometry.location.lng();
                addMarker(responselatlng);
                addGeocoderMarker();
            }
            else {
                setTimeout(function () { addGeocoderMarker(); }, 1000);
            }
        });
    }
}
function addMarker(coord) {
    var newMarker = new google.maps.Marker({
        position: coord,
        map: map,
        title: "cool places"
    });
}
