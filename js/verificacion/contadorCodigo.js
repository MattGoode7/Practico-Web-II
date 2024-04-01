document.addEventListener('DOMContentLoaded', function() {
    // Obtener el elemento del contador
    const contador = document.getElementById('contador');
  
    // Iniciar el contador en 20 segundos
    let segundosRestantes = 20;
  
    // Función para actualizar el contador
    function actualizarContador() {
      // Formatear los segundos restantes
      const minutos = Math.floor(segundosRestantes / 60);
      const segundos = segundosRestantes % 60;
  
      // Mostrar el contador en el formato deseado (por ejemplo, "00:20")
      contador.textContent = `Reenviar código en: ${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`;
  
      // Si el contador llega a 0, detenerlo
      if (segundosRestantes <= 0) {
        clearInterval(intervaloContador);
        contador.textContent = "Código disponible para reenviar";
        // Aquí podrías habilitar algún botón de "Reenviar código" si lo deseas
      } else {
        // Disminuir el contador en 1 segundo
        segundosRestantes--;
      }
    }
  
    // Establecer un intervalo para actualizar el contador cada segundo
    const intervaloContador = setInterval(actualizarContador, 1000);
  
    // Llamar a la función para iniciar el contador (esto se hace aquí para actualizar el contador inicialmente)
    actualizarContador();
  });
  