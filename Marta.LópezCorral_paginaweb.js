
console.log("¡La página ha sido cargada exitosamente!");

function actualizarContenido() {
    document.getElementById('geolocalizacion').innerHTML = 'Ubicación actual: Salamanca, España';
}

setTimeout(actualizarContenido, 2000);

let visitorCount = 0;

function updateVisitorCount() {
    visitorCount++;
    document.getElementById('visitor-count').innerText = visitorCount;
    document.getElementById('last-updated').innerText = new Date().toLocaleString();
}

setInterval(updateVisitorCount, 5000);

window.onload = updateVisitorCount;