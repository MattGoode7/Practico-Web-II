// Obtener todos los campos de entrada
const inputs = document.querySelectorAll('input[name]');
const botonSiguiente = document.getElementById('boton-siguiente');

// Función para verificar si todos los campos tienen un número
function verificarCampos() {
  for (let i = 0; i < inputs.length; i++) {
    if (!inputs[i].value.match(/^\d+$/)) {
      return false;
    }
  }
  return true;
}

// Función para mover el foco al siguiente campo
function moverAlSiguienteCampo(currentField) {
  const maxLength = parseInt(currentField.getAttribute('maxlength'));
  const nextFieldIndex = Array.from(inputs).indexOf(currentField) + 1;
  
  if (currentField.value.length === maxLength && nextFieldIndex < inputs.length) {
    inputs[nextFieldIndex].focus();
  }
}

// Función para mover el foco al campo anterior
function moverAlCampoAnterior(currentField) {
  const prevFieldIndex = Array.from(inputs).indexOf(currentField) - 1;
  
  if (prevFieldIndex >= 0) {
    inputs[prevFieldIndex].focus();
  }
}

// Escuchar eventos de entrada en cada campo
inputs.forEach(input => {
  input.addEventListener('input', (event) => {
    const currentField = event.target;
    if (verificarCampos()) {
      botonSiguiente.removeAttribute('disabled');
    } else {
      botonSiguiente.setAttribute('disabled', 'disabled');
    }
    if (currentField.value === '') {
      moverAlCampoAnterior(currentField);
    } else {
      moverAlSiguienteCampo(currentField);
    }
  });
});

