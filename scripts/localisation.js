function cacheElements() {
    document.getElementById('headerDiv').style.display='none';
    document.getElementById('bodyDiv').style.display='none';
    document.getElementById('footerDiv').style.display='none';
}

function cacheImage() {
document.getElementById('idImage').style.display='none';

document.getElementById('headerDiv').style.display='block';
document.getElementById('bodyDiv').style.display='block';
document.getElementById('footerDiv').style.display='block';
}

var displayed = false;
var displayedConducteur = false;
var displayedAccompagnateur = false;
window.onload = (event) =>{

    var trajet = localStorage.getItem("trajetName");
    var arret = localStorage.getItem("arretName");
    var lastArretName = localStorage.getItem("lastArretName");
    var dateTrajet = localStorage.getItem("dateTrajet");
    var heureTrajet = localStorage.getItem("heureTrajet");

    console.log(trajet);
    console.log(arret);

    cacheElements();
    setTimeout("cacheImage()",3500);
    this.openCloseForm();
    this.openCloseConducteur();
    this.openCloseAccompagnateur();

    document.getElementById("trajet").textContent = trajet;
    document.getElementById("arretDepart").textContent = 'Votre arret de départ : ' + arret;
    document.getElementById("lastArretName").textContent = lastArretName;
    document.getElementById("dateTrajet").textContent = "Date de départ: Le " + dateTrajet;
    document.getElementById("heureTrajet").textContent = "à " + heureTrajet;
};

function openCloseForm() {
    if (this.displayed==false) {
        document.getElementById("popupForm").style.display = "none";
    }

    if (this.displayed==true) {
        document.getElementById("popupForm").style.display = "block";
    }

    this.displayed = !this.displayed;
  }

  function openCloseAccompagnateur() {
    if (this.displayedAccompagnateur==false) {
        document.getElementById("popupAccompagnateur").style.display = "none";
    }

    if (this.displayedAccompagnateur==true) {
        document.getElementById("popupAccompagnateur").style.display = "block";
    }

    this.displayedAccompagnateur = !this.displayedAccompagnateur;
  }

  function openCloseConducteur() {
    if (this.displayedConducteur==false) {
        document.getElementById("popupConducteur").style.display = "none";
    }

    if (this.displayedConducteur==true) {
        document.getElementById("popupConducteur").style.display = "block";
    }

    this.displayedConducteur = !this.displayedConducteur;
  }