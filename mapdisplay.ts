let map:any;
let index = 0;

let coolocation : MapMarker[] = [];
interface LatLng{
    lat:number,
    lng:number
}

interface GoogleMapsConfig{
    center:LatLng,
    zoom:number
}

class MapMarker {
    address : string;
    latlng : LatLng;
    public constructor(address: string){
        this.address = address;
    };
}

let LatLngValue:LatLng={
    lat:43,
    lng:-79.38
}

let initMapConfig:GoogleMapsConfig={center:LatLngValue,zoom:8}

$.ajax ({
    url: './locations.json',
    datatype: 'json',
    success: function (data) {
        for(let cl of data) {
            let newcoolocation : MapMarker = new MapMarker(cl.address);
            coolocation.push(newcoolocation);
        }
    }
});

window.onload = function () {
    addGeocoderMarker();
}

function loadmap(){
    map = new google.maps.Map(

        document.getElementById("displaymap"),
        initMapConfig
    );
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


function addGeocoderMarker(){
    let responselatlng : LatLng = {lat: 0, lng: 0};
    geocoder = new google.maps.Geocoder();
    if (index < mapMarkers.length) {
        console.log(index);
        let address : string = mapMarkers[index].Address;
        geocoder.geocode(
            {'address': address},
            function (results, status) {

                if (status == 'OK') {
                    index ++;
                    responselatlng.lat = results[0].geometry.location.lat();
                    responselatlng.lng = results[0].geometry.location.lng();
                    addMarker(responselatlng);
                    addGeocoderMarker();
                } else {
                    setTimeout(function(){addGeocoderMarker()}, 1000);
                }
            }
        );
    }

}

function addMarker(coord:LatLng):void{

    let newMarker = new google.maps.Marker({
        position: coord,
        map: map,
        title:`cool places`
     });


}
