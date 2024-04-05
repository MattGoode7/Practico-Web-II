function redireccionar() {
  var opcionSeleccionada = document.querySelector(
    'input[name="opcion"]:checked'
  );
  if (opcionSeleccionada) {
    var valor = opcionSeleccionada.value;
    if (valor === "1") {
      window.location.href = "/html/transferencia/transfStep1.html";
    } else if (valor === "2") {
      window.location.href = "/html/transferencia/multi-transfer.html";
    }
  } else {
    alert("Por favor, seleccione una opción.");
  }
}
