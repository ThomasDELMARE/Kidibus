var arrets1 = [{
    id: 11,
    name: 'Arret Ecole du Palais',
    lat: 43.552488266829435,
    lon: 7.019085972065295,
},
{
    id: 12,
    name: 'Arret Les Moulins',
    lat: 43.54751274553529,
    lon: 7.046678716872739,
},
{
    id: 13,
    name: 'Arret Place du Cap',
    lat: 43.556542431715776,
    lon: 7.061894591379368,

},
{
    id: 14,
    name: 'Arret St-Roch',
    lat: 43.57893161120104,
    lon: 7.119915615705617,
},
{
    id: 15,
    name: 'Arret Lycée Louis-Jean Le Valois',
    lat: 43.59987418348411,
    lon: 7.121169804167541,
},{
    id: 16,
    name: 'Arret Les Vallets',
    lat: 43.639434329156934,
    lon: 7.133533079666557,
},
{
    id: 17,
    name: 'Arret Hello World',
    lat: 43.659618448093205,
    lon: 7.166234571118227,
},
{
    id: 18,
    name: 'Arret Place de sa Majesté Delmare',
    lat: 43.666883070443305,
    lon: 7.192498762829379,
},
{
    id: 19,
    name: 'Arret Les Genets',
    lat: 43.69415149338836,
    lon: 7.251261562668649,
},
{
    id: 20,
    name: 'Arret Collège St Joseph',
    lat: 43.71647397575789,
    lon: 7.2614301379534405,
}];


var arrets2 = [{
    id: 31,
    name: 'Arret Place St Jean',
    lat: 56.130366,
    lon: -106.346771,
},
{
    id: 32,
    name: 'Arret Ecole St Exupery',
    lat: 56.130366,
    lon: -106.346771,
},
{
    id: 33,
    name: 'Arret Marché',
    lat: 56.130366,
    lon: -106.346771,
},
{
    id: 34,
    name: 'Arret Boulevard du Pont',
    lat: 56.130366,
    lon: -106.346771,
},
{
    id: 35,
    name: 'Arret Collège François 1er',
    lat: 18.220554,
    lon: -63.068615,
},{
    id: 36,
    name: 'Arret Terrain des Etoiles',
    lat: 56.130366,
    lon: -106.346771,
},
{
    id: 37,
    name: 'Arret Villa sur Mer',
    lat: 56.130366,
    lon: -106.346771,
},
{
    id: 38,
    name: 'Arret Lycée Professionel',
    lat: 56.130366,
    lon: -106.346771,
}];

var trajet1 = {name: 'Trajet Cannes-Nice', arrets: [this.arrets1[0], this.arrets1[1], this.arrets1[2], this.arrets1[3], this.arrets1[4], this.arrets1[5], this.arrets1[6], this.arrets1[7], this.arrets1[8], this.arrets1[9]]};
var trajet2 = {name: 'Trajet Nice-Cannes', arrets: [this.arrets1[9], this.arrets1[8], this.arrets1[7], this.arrets1[6], this.arrets1[5], this.arrets1[4], this.arrets1[3], this.arrets1[2], this.arrets1[1], this.arrets1[0]]};

var trajet3 = {name: 'Trajet Nice-Antibes', arrets: [this.arrets2[0], this.arrets2[1], this.arrets2[2], this.arrets2[3], this.arrets2[4], this.arrets2[5], this.arrets2[6], this.arrets2[7]]};
var trajet4 = {name: 'Trajet Antibes-Nice', arrets: [this.arrets2[7], this.arrets2[6], this.arrets2[5], this.arrets2[4], this.arrets2[3], this.arrets2[2], this.arrets2[1], this.arrets2[0]]};

window.onload = (event) =>{

    console.log(trajet1);
    console.log(this.arrets2[1].name);

};

$(document).ready(function () {
    $("#type").change(function () {
        var val = $(this).val();
        if (val == "trajet1") {
            $("#size").html("<option selected disabled>Aucun</option><option value=arrets1[0]>Arret Ecole du Palais</option><option value=arrets1[1]>Arret Les Moulins</option><option value=arrets1[2]>Arret Place du Cap</option><option value=arrets1[3]>Arret St-Roch</option><option value=arrets1[4]>Arret Lycée Louis-Jean Le Valois</option><option value=arrets1[5]>Arret Les Vallets</option><option value=arrets1[6]>Arret Hello World</option><option value=arrets1[7]>Arret Place de sa Majesté Delmare</option><option value=arrets1[8]>Arret Les Genets</option><option value=arrets1[9]>Arret Collège St Joseph</option>");
        } else if (val == "trajet2") {
            $("#size").html("<option selected disabled>Aucun</option><option value=arrets1[9]>Arret Collège St Joseph</option><option value=arrets1[8]>Arret Les Genets</option><option value=arrets1[7]>Arret Place de sa Majesté Delmare</option><option value=arrets1[6]>Arret Hello World</option><option value=arrets1[5]>Arret Les Vallets</option><option value=arrets1[4]>Arret Lycée Louis-Jean Le Valois</option><option value=arrets1[3]>Arret St-Roch</option><option value=arrets1[2]>Arret Place du Cap</option><option value=arrets1[1]>Arret Les Moulins</option><option value=arrets1[0]>Arret Ecole du Palais</option>");
        } else if (val == "trajet3") {
            $("#size").html("<option selected disabled>Aucun</option><option value=arrets2[0]>Arret Place St Jean</option><option value=arrets2[1]>Arret Ecole St Exupery</option><option value=arrets2[2]>Arret Marché</option><option value=arrets2[3]>Arret Boulevard du Pont</option><option value=arrets2[4]>Arret Collège François 1er</option><option value=arrets2[5]>Arret Terrain de l'Etoile</option><option value=arrets2[6]>Arret Villa sur Mer</option><option value=arrets2[7]>Arret Lycée Professionel</option>");
        } else if (val == "trajet4") {
            $("#size").html("<option selected disabled>Aucun</option><option value=arrets2[7]>Arret Lycée Professionel</option><option value=arrets2[6]>Arret Villa sur Mer</option><option value=arrets2[5]>Arret Terrain de l'Etoile</option><option value=arrets2[4]>Arret Collège François 1er</option><option value=arrets2[3]>Arret Boulevard du Pont</option><option value=arrets2[2]>Arret Marché</option><option value=arrets2[1]>Arret Ecole St Exupery</option><option value=arrets2[0]>Arret Place St Jean</option>");
        } else if (val == "this.item0") {
            $("#size").html("<option value=''>--select one--</option>");
        }
    });
});


var trajetSelected = "Non Defini";
setTrajetSelected = function (trajet) {
    this.trajetSelected = trajet;
}  
getTrajetSelected = function () {
    return this.trajetSelected;
}


var arretSelected = "Non Defini";
setArretSelected = function (arret) {
    this.arretSelected = arret;
}  
getArretSelected = function () {
    return this.arretSelected;
}

onSuivant = function () {
    this.setTrajetSelected(document.getElementById("type").value);
    this.setArretSelected(document.getElementById("size").value);

    var trajet = eval("this."+this.getTrajetSelected());
    var arret = eval(this.getArretSelected());

    if(trajet == this.trajet1 || trajet == this.trajet2 || trajet == this.trajet3 ||trajet==this.trajet4) {
        
        var trajetArretsIds = [trajet.arrets.length];
        var trajetArretsNames = [trajet.arrets.length];
        var trajetArretsLat = [trajet.arrets.length];
        var trajetArretsLon = [trajet.arrets.length];

        for (var i = 0; i < trajet.arrets.length; i++) {
            trajetArretsIds[i] = trajet.arrets[i].id;
            trajetArretsNames[i] = trajet.arrets[i].name;
            trajetArretsLat[i] = trajet.arrets[i].lat;
            trajetArretsLon[i] = trajet.arrets[i].lon;
        }
        localStorage.setItem("trajetName", trajet.name);
        localStorage.setItem("trajetArretsIds", JSON.stringify(trajetArretsIds));
        localStorage.setItem("trajetArretsNames", JSON.stringify(trajetArretsNames));
        localStorage.setItem("trajetArretsLat", JSON.stringify(trajetArretsLat));
        localStorage.setItem("trajetArretsLon", JSON.stringify(trajetArretsLon));

        localStorage.setItem("arretId", arret.id);
        localStorage.setItem("arretName", arret.name);
        localStorage.setItem("arretLat", arret.lat);
        localStorage.setItem("arretLon", arret.lon);
    }
    else {
        localStorage.setItem("trajetName", "Non Defini");
        localStorage.setItem("arretName", "Non Defini");
    }

}