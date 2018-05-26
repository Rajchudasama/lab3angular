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

function loadmap(){
    map = new google.maps.Map(

        document.getElementById("displaymap"),
        initMapConfig
    );
    addMarker(LatLngValue);
    GetCordinate("1 Yonge Street Toronto, Ontario, Canada");

    function GetCordinate(address:string):LatLng{
        let geoCoder:object = new google.maps.Geocoder();

        geoCoder.geocode({'address':address},function(data,status){
            if(status==='OK'){
                //console.log('lat: '+ data[0].geometry.location.lat());
                //console.log('lng: '+ data[0].geometry.location.lng());
            }
        });
    }


    function addMarker(coord:LatLng):void{

        let newMarker = new google.maps.Marker({
            position: coord,
            map: map,
            title:`cool places`
        });


    }
}