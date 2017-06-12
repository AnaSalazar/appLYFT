var funcionPrimera = function () {
  $("#numeroTelefonico").keyup(botonHabilitado);
  $("#botonNext").click(generarCodigo);
}

var botonHabilitado = function () {
  var $botonNext = $("#botonNext");

  if($(this).val().length > 11) {
  	$botonNext.removeAttr("disabled");
    } else {
      $botonNext.attr("disabled", true);
    }
}

var generarCodigo = function () {
  
}
$(document).ready(funcionPrimera);
