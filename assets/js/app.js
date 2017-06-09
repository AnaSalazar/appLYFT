var funcionEjecutadora = function () {
  cambioDePagina();
}

var cambioDePagina = function () {
  setTimeout(function(){location.href="views/home.html"}, 3000);
}

$(document).ready(funcionEjecutadora);
