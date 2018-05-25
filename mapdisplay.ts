let map:any;
interface LatLng{
    lat:number,
    lng:number
}

interface GoogleMapsConfig{
    center:LatLng,
    zoom:number
}

let LatLngValue:LatLng={
    lat:43,
    lng:-79.38
}

let initMapConfig:GoogleMapsConfig={center:LatLngValue,zoom:8}

function loadmap(){
    map = new google.maps.Map(

        document.getElementById("displaymap"),
        initMapConfig
    );
}