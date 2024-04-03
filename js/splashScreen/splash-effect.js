// Obtén el elemento contenedor
const contenedor = document.querySelector('.contenedor');

// Agrega la clase "active" para activar el efecto de fade-in
setTimeout(() => {
  contenedor.classList.add('active');

  // Después de 3 segundos, agrega la clase "fade-out" para iniciar el efecto de fade-out
  setTimeout(() => {
    contenedor.classList.add('fade-out');
    
    // Después de que termine la animación de fade-out, redirige a otro HTML
    contenedor.addEventListener('animationend', () => {
      window.location.href = '/html/login/login.html'; // Cambia 'otro.html' al HTML al que quieres redirigir
    });
  }, 2000);
}, 100);
