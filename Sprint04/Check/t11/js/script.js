mapboxgl.accessToken = 'pk.eyJ1IjoiY29tcHJvbWlzZSIsImEiOiJja2huc3VmN3IwenQ3MnNydGs5MXZvOG40In0.BSFjpMXc-fdi4SqVvdAiSA';
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/dark-v10', // style URL
    center: [165.973, -50.604167], // starting position [lng, lat]
    zoom: 13 // starting zoom
});

// let tst = map.getLngLat;
// console.log(tst);
map.addControl(
    new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    mapboxgl: mapboxgl
    })
    );

var geolocate = new mapboxgl.GeolocateControl({
    positionOptions: {
    enableHighAccuracy: true
    },
    trackUserLocation: true
});
map.addControl(geolocate);

geolocate.on('trackuserlocationstart', function(){
    marker.remove(); 
})

var nav = new mapboxgl.NavigationControl();
map.addControl(nav, 'top-right');

var marker = new mapboxgl.Marker({
    draggable: true
    })
    .setLngLat([0, 0])
    .addTo(map);
     
    function onDragEnd() {
    var lngLat = marker.getLngLat();
    coordinates.style.display = 'block';
    coordinates.innerHTML =
    'Longitude: ' + lngLat.lng + '<br />Latitude: ' + lngLat.lat;
    }
     
    marker.on('dragend', onDragEnd);