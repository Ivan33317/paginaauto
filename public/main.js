// Obtener el botón y el menú
const abrirMenuButton = document.getElementById('abrir-menu');
const navbar = document.getElementById('navbar');

// Agregar el evento de clic al botón
abrirMenuButton.addEventListener('click', function() {
    // Cambiar el estado del menú (si está visible, ocultarlo; si está oculto, mostrarlo)
    if (navbar.style.display === 'flex') {
        navbar.style.display = 'none';
    } else {
        navbar.style.display = 'flex';
    }
});

