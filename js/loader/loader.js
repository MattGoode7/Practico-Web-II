// Función para mostrar el loader y redirigir después de un tiempo
function showLoaderAndRedirect() {
    // Mostrar el loader
    document.getElementById('loader').style.display = 'block';
    
    // Simular una carga con un retraso
    setTimeout(function() {
      // Redirigir a otro HTML
      window.location.href = '/html/transferencia/transfer.html'; // Cambiar 'otro.html' al HTML al que quieres redirigir
    }, 3000); // Cambiar 3000 por el tiempo de carga deseado en milisegundos (en este caso, 3 segundos)
  }
  
  // Evento clic del botón "Siguiente"
  document.getElementById('submitButton').addEventListener('click', function() {
    showLoaderAndRedirect();
  });
  