let editando = false;

// evento submit del formulario
document.getElementById("formEvento").addEventListener("submit", function(e) {
    e.preventDefault();

    const fecha = document.getElementById("fecha").value;
    const hora = document.getElementById("hora").value;
    const descripcion = document.getElementById("descripcion").value;

    const url = editando ? "/editar" : "/crear";

    fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fecha, hora, descripcion })
    })
    .then(res => res.text())
    .then(data => {
        alert(data);
        limpiarFormulario();
        editando = false;
        document.getElementById("btnGuardar").innerText = "Crear";
        cargarEventos();
        actualizarEstadisticas();
    });
});

// funcion para mostrar eventos
function cargarEventos() {
    fetch("/eventos")
        .then(res => res.json())
        .then(data => {
            const contenedor = document.getElementById("listaEventos");
            contenedor.innerHTML = "";

            // 1. Agrupar eventos por fecha
            const grupos = {};
            data.forEach(ev => {
                if (!grupos[ev.fecha]) grupos[ev.fecha] = [];
                grupos[ev.fecha].push(ev);
            });

            // 2. Ordenar fechas y renderizar
            Object.keys(grupos).sort().forEach(fecha => {
                const fechaDiv = document.createElement("div");
                fechaDiv.className = "fecha-grupo";
                
                let eventosHTML = `<div class="fecha-header">📅 ${fecha}</div>`;

                grupos[fecha].forEach(ev => {
                    const htmlMarkdown = marked.parse(ev.contenido);
                    const textoLimpio = ev.contenido.trim();

                    eventosHTML += `
                        <div class="evento-item">
                            <div class="evento-detalle">
                                <span class="evento-hora">🕒 ${ev.hora}</span>
                                <div class="markdown-content">${htmlMarkdown}</div>
                            </div>
                            <div class="evento-botones">
                                <button class="btn-editar" onclick="editarEvento('${ev.fecha}', '${ev.hora}', \`${textoLimpio}\`)">Editar</button>
                                <button class="btn-eliminar" onclick="eliminarEvento('${ev.fecha}', '${ev.hora}')">Eliminar</button>
                            </div>
                        </div>
                    `;
                });

                fechaDiv.innerHTML = eventosHTML;
                contenedor.appendChild(fechaDiv);
            });
        });
}

// funcion para editar evento
function editarEvento(fecha, hora, descripcion) {
    document.getElementById("fecha").value = fecha;
    document.getElementById("hora").value = hora;
    document.getElementById("descripcion").value = descripcion;

    editando = true;
    document.getElementById("btnGuardar").innerText = "Actualizar";
}

// funcion para eliminar evento
function eliminarEvento(fecha, hora) {
    fetch("/eliminar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ fecha, hora })
    })
    .then(res => res.text())
    .then(data => {
        alert(data);
        cargarEventos();
        actualizarEstadisticas();
    });
}

// limpiar formulario
function limpiarFormulario() {
    document.getElementById("fecha").value = "";
    document.getElementById("hora").value = "";
    document.getElementById("descripcion").value = "";
}

// cargar eventos al iniciar
window.onload = cargarEventos;

// Función para cargar y mostrar las estadísticas en la interfaz
function actualizarEstadisticas() {
    fetch('/estadisticas')
        .then(response => response.json())
        .then(data => {
            // Asegúrate de que estos IDs coincidan con los de tu index.html
            const totalEventosElem = document.getElementById('total-eventos');
            const fechasUnicasElem = document.getElementById('fechas-unicas');

            if (totalEventosElem) totalEventosElem.innerText = data.totalEventos;
            if (fechasUnicasElem) fechasUnicasElem.innerText = data.fechasUnicas;
        })
        .catch(error => console.error('Error al obtener estadísticas:', error));
}

// Llamar a la función cuando cargue la página
document.addEventListener('DOMContentLoaded', () => {
    actualizarEstadisticas();
    listarEventos(); 
});