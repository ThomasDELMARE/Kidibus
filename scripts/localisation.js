function cacheImage() {
document.getElementById('idImage').style.display='none';
}

var displayed = false;
var displayedConducteur = false;
var displayedAccompagnateur = false;
window.onload = (event) =>{

    var trajet = localStorage.getItem("trajetName");
    var arret = localStorage.getItem("arretName");

    console.log(trajet);
    console.log(arret);

    setTimeout("cacheImage()",3000);
    this.openCloseForm();
    this.openCloseConducteur();
    this.openCloseAccompagnateur();

    document.getElementById("trajet").textContent = trajet;
    document.getElementById("arretDepart").textContent = 'Votre arret de départ : ' + arret;

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