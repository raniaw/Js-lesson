var inpLat = document.getElementById("inpLat");
var inpLng = document.getElementById("inpLng");
var btnUpd = document.getElementById("btnChnCoord")

var map;
var slider = document.getElementById("slZoom");

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 53.5511,
            lng: 9.9937
        },
        zoom: parseInt(slider.value)
    });
}

btnUpd.addEventListener("click", changeCoord);


function changeCoord() {

    map.setCenter(new google.maps.LatLng(parseFloat(inpLat.value), parseFloat(inpLng.value)));
}

//Andijan, Uzbekistan
//40°49'13.9"N 72°21'39.1"E 

slider.addEventListener("change", changeZoom)

function changeZoom(e) {
    e.preventDefault();
    let sl = parseInt(slider.value);
    map.setZoom(sl);

}