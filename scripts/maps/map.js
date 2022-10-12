
//See post: https://asmaloney.com/2014/01/code/creating-an-interactive-map-with-leaflet-and-openstreetmap/

var arret = localStorage.getItem("arretName");

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
var arretActuel = 0;

function displayMarkers(markers, defaultIcon = true) {
    for (var i = 0; i < markers.length; ++i) {
        if (markers[i].name == arret) {
            defaultIcon = true;
        }
        else {
            defaultIcon = false;
        }

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

//$('#largeModal').modal('show');

function displayBus(markers, defaultIcon = false) {
    if (arretActuel < markers.length) {
        if (markers[arretActuel].name == arret) {
            $('#modalDepart').modal('show');
        }
        try {
            L.marker([Number(markers[arretActuel].lat), Number(markers[arretActuel].lon)], defaultIcon ? { icon: myIcon } : { icon: iconBus})
                .bindPopup(
                    '<a target="_blank">' +
                    "Le bus ce situe à cet arret: " +
                    markers[arretActuel].name +
                    '</a>'
                )
                .addTo(map)
        } catch (err) {
            console.log("Ajout du marqueur n'a pas réussi car : ", err)
        }
        if (markers.length - arretActuel == 1)  {
            $('#modalArrivee').modal('show');
        }
        arretActuel++;
    }
    else{
        arretActuel = arretActuel;
    }
}

function hideModalDepart() {
    $('#modalDepart').modal('hide');
}

function hideModalArrivee() {
    $('#modalArrivee').modal('hide');
}

function main() {
    displayMarkers(markers);

    console.log("Les arrets du trajet");
    console.log(arretsTrajetNames[0]);


    console.log("Les markers");
    console.log(markers);
    if (arretActuel <= markers.length) {
        setInterval(() => {
            $(".leaflet-marker-icon").remove();
            $(".leaflet-popup").remove();
            $(".leaflet-marker-shadow").remove();
            displayMarkers(markers);
            displayBus(markers);
        }, 5000);
    }

}

main();