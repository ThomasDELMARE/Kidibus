// Initialisation des variables
// cf https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/demo/spline-irregular-time/

var which_esps = [];
var refreshInterval = 300000;
var currentIntervalId = 0;
const markers = [{
        name: 'Canada',
        url: 'https://en.wikipedia.org/wiki/Canada',
        lat: 56.130366,
        lon: -106.346771,
    },
    {
        name: 'Anguilla',
        url: 'https://en.wikipedia.org/wiki/Anguilla',
        lat: 18.220554,
        lon: -63.068615,
    },
    {
        name: 'Barbados',
        url: 'https://en.wikipedia.org/wiki/Barbados',
        lat: 13.193887,
        lon: -59.543198,
    },
    {
        name: 'United States',
        url: 'https://en.wikipedia.org/wiki/United_States',
        lat: 37.09024,
        lon: -95.712891,
    },
    {
        name: 'Ireland',
        url: 'https://en.wikipedia.org/wiki/Ireland',
        lat: 53.41291,
        lon: -8.24389,
    },
    {
        name: 'Scotland',
        url: 'https://en.wikipedia.org/wiki/Scotland',
        lat: 56.490671,
        lon: -4.202646,
    },
    {
        name: 'England',
        url: 'https://en.wikipedia.org/wiki/England',
        lat: 52.355518,
        lon: -1.17432,
    },
    {
        name: 'France',
        url: 'https://en.wikipedia.org/wiki/France',
        lat: 46.227638,
        lon: 2.213749,
    },
    {
        name: 'The Netherlands',
        url: 'https://en.wikipedia.org/wiki/The_Netherlands',
        lat: 52.132633,
        lon: 5.291266,
    },
    {
        name: 'Switzerland',
        url: 'https://en.wikipedia.org/wiki/Switzerland',
        lat: 46.818188,
        lon: 8.227512,
    },
    {
        name: 'South Africa',
        url: 'https://en.wikipedia.org/wiki/South_Africa',
        lat: -30.559482,
        lon: 22.937506,
    },
    {
        name: 'Madagascar',
        url: 'https://en.wikipedia.org/wiki/Madagascar',
        lat: -18.766947,
        lon: 46.869107,
    },
    {
        name: 'Taiwan',
        url: 'https://en.wikipedia.org/wiki/Taiwan',
        lat: 23.69781,
        lon: 120.960515,
    },
    {
        name: 'Japan',
        url: 'https://en.wikipedia.org/wiki/Japan',
        lat: 36.204824,
        lon: 138.252924,
    },
    {
        name: 'Argentina',
        url: 'https://en.wikipedia.org/wiki/Argentina',
        lat: -38.416096,
        lon: -63.616673,
    },
];
const espWeathers = [];
const myURL = jQuery('script[src$="charts.js"]')
    .attr('src')
    .replace('charts.js', '');
// Icônes récupérées sur leaflet pour faire la différenciation
const myIcon = L.icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/149/149059.png",
    iconRetinaUrl: "https://cdn-icons-png.flaticon.com/512/149/149059.png",
    iconSize: [29, 24],
    iconAnchor: [9, 21],
    popupAnchor: [0, -14],
})

//=== Initialisation des traces/charts de la page html ===
// Apply time settings globally


// Main
main();

// Permet la modification du temps de rafraichissement1
function modifyRefreshTime() {
    refreshInterval = document.getElementById('timeoutValue').value

    if (!isNaN(refreshInterval)) {
        refreshInterval = (document.getElementById('timeoutValue').value) * 1000;
        console.log("New refresh time is : ", refreshInterval)
        clearInterval(currentIntervalId);

        window.setInterval(get_samples_from_database,
                refreshInterval,
                espList) // param 1 for get_samples_from_database()

    } else {
        alert("Le nombre entré n'est pas un chiffre !")
        return
    }

}

// Cette fonction permet de splitter entre deux types de données de la BDD, soit des ESP reçus via MQTT, soit des données que l'on pourrait interroger via leur IP (IN PROGRESS)
function setEspList(resultat) {
    //=== Gestion de la flotte d'ESP =================================
    var which_esps_mac = []
    var which_esps_ip = []
    var which_esps = resultat

    process_esp(which_esps, "mac")

    for (var j = 0; j < which_esps_ip.length; i++) {
        // process_esp(which_esps_ip[i], "ip")
    }
}

//=== Installation de la periodicite des requetes GET============
function process_esp(espList, typeAdresse) {
    // Adresse IP
    if (typeAdresse == "ip") {
        // Gestion de la temperature
        // premier appel pour eviter de devoir attendre RefreshT
        get_samples_from_esp(which_esps[i]);
    }
    // Adresse MAC
    if (typeAdresse == "mac") {
        // Gestion de la temperature
        // premier appel pour eviter de devoir attendre RefreshT
        get_samples_from_database(espList);

        //calls a function or evaluates an expression at specified
        //intervals (in milliseconds).
        currentIntervalId =
            window.setInterval(get_samples_from_database,
                refreshInterval,
                espList) // param 1 for get_samples_from_database()
    } else {
        return null;
    }
}

//=== Recuperation dans le Node JS server et d'Atlas des samples de l'ESP et 
//=== Alimentation des charts ====================================
//=== Ici on interroge pas l'ESP mais juste une base de données qui contient toutes les valeurs


// In progress... Je voulais gérer des connexions à une adresse IP mais par manque de temps je n'ai pas pu finaliser cela
function get_samples_from_esp(path_on_node, serie) {}

// Permet de récupérer toutes les ESPs dans la base de données
function retrieveAllEsp() {
    $.ajax({
        url: "/fetchAllUsers",
        type: 'GET',
        headers: { Accept: "application/json", },
        success: function(resultat, statut) {
            // Construction de l'objet contenant les informations des esp
            // enregistrées sur Atlas
            espResults = resultat.map(res => {
                    return {
                        "temp": res.value,
                        "lat": res.lat,
                        "lon": res.lon,
                        "name": res.esp_nb,
                        "city": res.city,
                        "date": new Date(res.date)
                    }
                })
                // console.log(espResults)
            setEspList(resultat);
            // Paramètre à true pour afficher des marqueurs différents entre 
            // l'api OpenWeatherMap et la base de données Atlas
            displayMarkers(espResults, true);
        },
        error: function(resultat, statut, erreur) {
            console.log("Error happened on the fetch all users ajax call : ", erreur)
        }
    });
}

// Permet de différencier si l'adresse d'un ESP est MAC ou IP
function countString(str, letter) {
    let count = 0;

    // looping through the items
    for (let i = 0; i < str.length; i++) {

        // check if the character is at that position
        if (str.charAt(i) == letter) {
            count += 1;
        }
    }
    return count;
}

/////// Partie concernant l'appel à l'api OpenWeatherMap ///////

// Permet de récupérer les différentes localisations que l'on a choisi, grâce à l'API open weather
async function apiCalls(markers) {
    let lat, lon;
    const promises = [];

    // console.log("in apiCalls", markers)
    for (var i = 0; i < markers.length; i++) {
        lat = markers[i].lat;
        lon = markers[i].lon;

        const apiKey = "&appid=940d0f1e4f2294d0c4a9ab486dfd9a52";
        const route = "https://api.openweathermap.org/data/2.5/weather"
        const params = "?units=metric&lat=" + lat + "&lon=" + lon;

        // On construit l'url à partir des latitudes et longitudes récupérées 
        // dans l'objet markers défini plus bas
        const url = route + params + apiKey;

        promises.push(apiCall(url)); // Executed about 50 times.
    }
    return Promise.all(promises)
}

// Permet de traiter les données renvoyées par l'API
async function apiCall(url) {
    // console.log("in apiCall")
    return new Promise(resolve => {
        fetch(url)
            .then(function(response) {
                return response.json()
            })
            .then(function(data) {
                // Construction de l'objet Weather contenant les latitudes et longitudes
                // Ces informations nous permettent de requêter pour avoir la température via l'api

                var weather = {};
                weather.temp = data.main.temp;
                weather.lat = data.coord.lat;
                weather.lon = data.coord.lon;
                weather.name = data.name;
                weather.date = new Date(Date.now())
                espWeathers.push(weather)
                resolve(true);
            }).catch(() => resolve(false));
    });
}

// Permet d'ajouter le marqueur
function computeWeather(markers) {
    apiCalls(markers).then(() => {
        displayMarkers(espWeathers)
    });
}

// Fonction d'affichage des marqueurs que ce soit pour l'api OpenWeatherMap 
// ou pour les données récupérées sur Atlas
function displayMarkers(markers, defaultIcon = false) {
    for (var i = 0; i < markers.length; ++i) {
        try {
            L.marker([Number(markers[i].lat), Number(markers[i].lon)], defaultIcon ? { icon: myIcon } : {})
                .bindPopup(
                    '<a target="_blank">' +
                    markers[i].name + " : " + markers[i].temp + " °C" +
                    '</a>'
                )
                .addTo(map)
        } catch (err) {
            console.log("Ajout du marqueur n'a pas réussi car : ", err)
        }

    }
}

// Fonction main
function main() {
    computeWeather(markers);
}