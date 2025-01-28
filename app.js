window.addEventListener('load', () => {
    const liquid = document.querySelector('.liquid');
    const splashContainer = document.querySelector('.splash-container');
    const streamContainer = document.querySelector('.stream-container');
    const content = document.querySelector('.content');

    // Animar el líquido desde la esquina superior derecha
    setTimeout(() => {
        liquid.style.transform = 'scale(1)';
    }, 500);

    // Generar chorros repetidamente
    setInterval(() => {
        createStream(streamContainer);
    }, 500);

    // Mostrar el contenido una vez que el líquido llene la pantalla
    setTimeout(() => {
        content.style.opacity = 1;
    }, 3500);
});

// Función para crear un chorro
function createStream(container) {
    const stream = document.createElement('div');
    stream.classList.add('stream');

    // Posición inicial aleatoria en la esquina superior derecha
    const offsetX = Math.random() * 200 - 100; // Variación en X
    stream.style.right = `${offsetX}px`;

    container.appendChild(stream);

    // Crear una salpicadura cuando el chorro llega al fondo
    setTimeout(() => {
        createSplash(container, offsetX, window.innerHeight - 50);
        stream.remove();
    }, 2000); // Tiempo de caída del chorro
}

// Función para crear una salpicadura
function createSplash(container, x, y) {
    const splash = document.createElement('div');
    splash.classList.add('splash');

    // Posición de la salpicadura
    splash.style.left = `${x}px`;
    splash.style.top = `${y}px`;

    // Tamaño aleatorio
    const size = Math.random() * 80 + 10;
    splash.style.width = `${size}px`;
    splash.style.height = `${size}px`;

    container.appendChild(splash);

    // Eliminar la salpicadura después de la animación
    splash.addEventListener('animationend', () => {
        splash.remove();
    });
}
