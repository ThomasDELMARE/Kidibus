function cacheImage() {
document.getElementById('idImage').style.display='none';
}

var displayed = false;
var displayedConducteur = false;
var displayedAccompagnateur = false;
window.onload = (event) =>{

    setTimeout("cacheImage()",3000);
    this.openCloseForm();
    this.openCloseConducteur();
    this.openCloseAccompagnateur();

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