
//See post: https://asmaloney.com/2014/01/code/creating-an-interactive-map-with-leaflet-and-openstreetmap/

var map = L.map('map', {
    center: [43.552488266829435, 7.019085972065295],
    minZoom: 2,
    zoom: 10,
})

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    subdomains: ['a', 'b', 'c'],
}).addTo(map)


var arretsTrajetNames = JSON.parse(localStorage.getItem("trajetArretsNames"));
var arretsTrajetLat = JSON.parse(localStorage.getItem("trajetArretsLat"));
var arretsTrajetLon = JSON.parse(localStorage.getItem("trajetArretsLon"));



function displayMarkers(markers, defaultIcon = false) {
    for (var i = 0; i < markers.length; ++i) {
        try {
            L.marker([Number(markers[i].lat), Number(markers[i].lon)], defaultIcon ? { icon: myIcon } : {})
                .bindPopup(
                    '<a target="_blank">' +
                    markers[i].name +
                    '</a>'
                )
                .addTo(map)
        } catch (err) {
            console.log("Ajout du marqueur n'a pas réussi car : ", err)
        }

    }
}

function main() {
    displayMarkers(markers);

    console.log("Les arrets du trajet");
    console.log(arretsTrajetNames[0]);


    console.log("Les markers");
    console.log(markers);

}

main();