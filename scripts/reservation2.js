onSend = function () {
    var radios = document.getElementsByName('heure');

for (var i = 0, length = radios.length; i < length; i++) {
  if (radios[i].checked) {
    // do whatever you want with the checked radio
    localStorage.setItem("heureTrajet", radios[i].value);

    // only one radio can be logically checked, don't check the rest
    break;
  }
}
}