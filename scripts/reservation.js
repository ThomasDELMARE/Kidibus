var arrets1 = [{
    id: 11,
    name: 'Arret Ecole du Palais',
    lat: 56.130366,
    lon: -106.346771,
},
{
    id: 12,
    name: 'Arret Les Moulins',
    lat: 56.130366,
    lon: -106.346771,
},
{
    id: 13,
    name: 'Arret Place du Cap',
    lat: 56.130366,
    lon: -106.346771,
},
{
    id: 14,
    name: 'Arret St-Roch',
    lat: 56.130366,
    lon: -106.346771,
},
{
    id: 15,
    name: 'Arret Lycée Louis-Jean Le Valois',
    lat: 18.220554,
    lon: -63.068615,
},{
    id: 16,
    name: 'Arret Les Vallets',
    lat: 56.130366,
    lon: -106.346771,
},
{
    id: 17,
    name: 'Arret Hello World',
    lat: 56.130366,
    lon: -106.346771,
},
{
    id: 18,
    name: 'Arret Place de sa Majesté Delmare',
    lat: 56.130366,
    lon: -106.346771,
},
{
    id: 19,
    name: 'Arret Les Genets',
    lat: 56.130366,
    lon: -106.346771,
},
{
    id: 20,
    name: 'Arret Collège St Joseph',
    lat: 18.220554,
    lon: -63.068615,
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
    console.log(trajet3);

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

    var myVar = eval("this."+this.getTrajetSelected());

    if(myVar == this.trajet1) {
        localStorage.setItem("trajet", myVar.name);
        localStorage.setItem("arret", this.getArretSelected());
    }
    else if(myVar == this.trajet2) {
        localStorage.setItem("trajet", myVar.name);
        localStorage.setItem("arret", this.getArretSelected());
    }
    else if(myVar == this.trajet3) {
        localStorage.setItem("trajet", myVar.name);
        localStorage.setItem("arret", this.getArretSelected());
    }
    else if(myVar == this.trajet4) {
        localStorage.setItem("trajet", myVar.name);
        localStorage.setItem("arret", this.getArretSelected());
    }
    else {
        localStorage.setItem("trajet", "Non Defini");
        localStorage.setItem("arret", "Non Defini");
    }

}