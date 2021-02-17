const API_KEY=f6fdedabea5bfca150cde9766c224bd2;
const COORDS = "coords";

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    }
    saveCoords(coordsObj)
}

function askForCoords(){
    console.log("ask")
    navigator.geolocation.getCurrentPosition(handleGeoSucces, () => console.log("Can't access geo location"));
}

function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords == null){
        askForCoords();
    } else {

    }
}


function init() {
    loadCoords();
}

init();