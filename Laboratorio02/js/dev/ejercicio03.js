// CONTENEDOR PRINCIPAL 
const contenedorPrincipal = document.createElement("div");
document.body.appendChild(contenedorPrincipal);

// TITULO 
const titulo = document.createElement("h1");
titulo.innerText = "El Ahorcado - Arequipa";
titulo.style.textAlign = "center";
titulo.style.fontSize = "65px";
titulo.style.color = "#1f4e79";
contenedorPrincipal.appendChild(titulo);

// CONTENEDOR SUPERIOR 
const contenedorSuperior = document.createElement("div");
contenedorSuperior.style.display = "flex";
contenedorSuperior.style.justifyContent = "center";
contenedorSuperior.style.gap = "20px";
contenedorSuperior.style.marginTop = "10px";

contenedorPrincipal.appendChild(contenedorSuperior);

// CONTENEDOR CANVAS 
const contenedorCanvas = document.createElement("div");
contenedorSuperior.appendChild(contenedorCanvas);

// CANVAS
const canvas = document.createElement("canvas");
canvas.width = 300;
canvas.height = 300;
canvas.style.border = "1px solid black";

contenedorCanvas.appendChild(canvas);

const ctx = canvas.getContext("2d"); // contexto del canvas

// CONTENEDOR INFORMACION
const contenedorInformacion = document.createElement("div");
contenedorSuperior.appendChild(contenedorInformacion);

// TEXTO PALABRA A ADIVINAR
const textoPalabra = document.createElement("p");
textoPalabra.style.fontSize = "30px";
textoPalabra.style.fontWeight = "bold";
textoPalabra.innerText = "Palabra a adivinar:";
contenedorInformacion.appendChild(textoPalabra);

// CONTENEDOR DE LA PALABRA -> guiones
const contenedorPalabra = document.createElement("div");
contenedorPalabra.style.display = "flex";
contenedorPalabra.style.gap = "10px";
contenedorPalabra.style.marginTop = "10px";

contenedorInformacion.appendChild(contenedorPalabra);

// PALABRAS AREQUIPEÑAS
const palabras = ["PAMPACOLCA", "AREQUIPA", "MISTI", "CHACHANI"];

// palabra actual
let palabraSecreta = "";
let errores = 0;
let letrasIncorrectas = [];
let letrasCorrectas = [];
let juegoTerminado = false;

// funcion iniciar juego
function iniciarJuego() {
    juegoTerminado = false;
    contenedorPalabra.innerHTML = "";

    errores = 0;
    letrasIncorrectas = [];
    letrasCorrectas = [];

    textoErrores.innerText = "Errores: 0 / 10";
    textoLetrasIncorrectas.innerText = "Letras incorrectas: ";

    // mostrar errores
    contenedorErrores.style.display = "block";

    // limpiar CANVAS
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    palabraSecreta = palabras[Math.floor(Math.random() * palabras.length)];

    crearBotones(); // añade los botones con letras A-Z

    for (let i = 0; i < palabraSecreta.length; i++) {
        const letra = document.createElement("span");
        letra.innerText = "_";
        letra.style.fontSize = "60px";
        letra.style.fontWeight = "bold";
        letra.style.margin = "5px";
        letra.style.display = "inline-block";
        letra.style.minWidth = "25px";
        letra.style.textAlign = "center";
        contenedorPalabra.appendChild(letra);
    }

    // ocultar resultado
    contenedorResultado.style.display = "none";
    contenedorResultado.innerText = "";
}

// CONTENEDOR INFERIOR
const contenedorInferior = document.createElement("div");
contenedorInferior.style.textAlign = "center";
contenedorInferior.style.marginTop = "30px";

contenedorPrincipal.appendChild(contenedorInferior);

// BOTON INICIAR JUEGO
const botonIniciar = document.createElement("button");
botonIniciar.style.backgroundColor = "#6b00d6";
botonIniciar.style.color = "white";
botonIniciar.style.border = "none";
botonIniciar.style.borderRadius = "5px";
botonIniciar.style.fontWeight = "bold";
botonIniciar.innerText = "Iniciar Juego";
botonIniciar.style.padding = "10px 20px";
botonIniciar.style.fontSize = "30px";

botonIniciar.onclick = function () {
    iniciarJuego();
};

contenedorInferior.appendChild(botonIniciar);

// CONTENEDOR ERRORES
const contenedorErrores = document.createElement("div");
contenedorErrores.style.marginTop = "20px";
contenedorErrores.style.padding = "10px";
contenedorErrores.style.backgroundColor = "#f5b7bdee";
contenedorErrores.style.color = "#ac0011";
contenedorErrores.style.borderRadius = "5px";

// oculto al inicio
contenedorErrores.style.display = "none";
contenedorInformacion.appendChild(contenedorErrores);

// TEXTO ERRORES
const textoErrores = document.createElement("p");
textoErrores.style.fontSize = "35px";
textoErrores.style.fontWeight = "bold";
textoErrores.innerText = "Errores: 0 / 10";
contenedorErrores.appendChild(textoErrores);

// TEXTO LETRAS INCORRECTAS
const textoLetrasIncorrectas = document.createElement("p");
textoLetrasIncorrectas.innerText = "Letras incorrectas: ";
contenedorErrores.appendChild(textoLetrasIncorrectas);

// CONTENEDOR LETRAS
const contenedorLetras = document.createElement("div");
contenedorLetras.style.display = "flex";
contenedorLetras.style.flexWrap = "wrap";
contenedorLetras.style.justifyContent = "center";
contenedorLetras.style.gap = "10px";
contenedorLetras.style.marginTop = "20px";

contenedorPrincipal.appendChild(contenedorLetras);

// FUNCION CREAR BOTONES
function crearBotones() {
    contenedorLetras.innerHTML = "";

    const abecedario = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (let letra of abecedario) {
        const boton = document.createElement("button");
        boton.innerText = letra;

        boton.style.width = "70px";
        boton.style.height = "70px";
        boton.style.fontSize = "40px";
        boton.style.fontWeight = "bold";
        boton.style.borderRadius = "5px";
        boton.style.border = "1px solid #333";

        // EVENTO CLICK
        boton.onclick = function () {
            manejarIntento(letra, boton);
        };

        contenedorLetras.appendChild(boton);
    }
}

// MANEJO DE LETRAS, BOTONES Y COLORES
function manejarIntento(letra, boton) {

    // BLOQUEAR SI YA TERMINO EL JUEGO
    if (juegoTerminado) return;

    // desactivar boton
    boton.disabled = true;

    if (palabraSecreta.includes(letra)) {
        boton.style.backgroundColor = "#a4fcdfee";
        letrasCorrectas.push(letra);
        actualizarPalabra();
    } else {

        // si ya llego a 10, no hacer nada
        if (errores >= 10) return;

        // sumar error
        errores++;

        letrasIncorrectas.push(letra);

        textoErrores.innerText = "Errores: " + errores + " / 10";
        textoLetrasIncorrectas.innerText = "Letras incorrectas: " + letrasIncorrectas.join(", ");

        // pintar boton SOLO si aun no termina
        boton.style.backgroundColor = "#fca2a2";

        dibujarAhorcado();

        // si llego a 10, terminar
        if (errores >= 10) {
            verificarEstado();
            return;
        }
    }

    verificarEstado();
}

// MOSTRAR LETRAS ACERTADAS
function actualizarPalabra() {
    const letras = contenedorPalabra.children;

    for (let i = 0; i < palabraSecreta.length; i++) {
        if (letrasCorrectas.includes(palabraSecreta[i])) {
            letras[i].innerText = palabraSecreta[i];
        }
    }
}

// CONTENEDOR RESULTADO
const contenedorResultado = document.createElement("div");
contenedorResultado.style.fontSize = "50px";
contenedorResultado.style.fontWeight = "bold";
contenedorResultado.style.marginTop = "20px";
contenedorResultado.style.padding = "10px";
contenedorResultado.style.borderRadius = "5px";
contenedorResultado.style.display = "none";

contenedorInferior.appendChild(contenedorResultado);

// VERIFICAR CONDICION DE VICTORIA/DERROTA PARA MOSTRAR CONTENDEDOR RESULTADO
function verificarEstado() {

    // DERROTA PRIMERO
    if (errores >= 10) {
        juegoTerminado = true;

        contenedorResultado.style.display = "block";
        contenedorResultado.style.backgroundColor = "#eed2d4";
        contenedorResultado.style.color = "#9c3f48";
        contenedorResultado.innerText = "Perdiste. La palabra era: " + palabraSecreta;

        desactivarTodosLosBotones();
        return;
    }

    // VERIFICAR VICTORIA
    let ganaste = true;

    for (let letra of palabraSecreta) {
        if (!letrasCorrectas.includes(letra)) {
            ganaste = false;
            break;
        }
    }

    if (ganaste) {
        juegoTerminado = true;

        contenedorResultado.style.display = "block";
        contenedorResultado.style.backgroundColor = "#d4edda";
        contenedorResultado.style.color = "#155724";
        contenedorResultado.innerText = "Ganaste";

        desactivarTodosLosBotones();
    }
}

function desactivarTodosLosBotones() {
    const botones = contenedorLetras.querySelectorAll("button");

    botones.forEach(boton => {
        boton.disabled = true;
    });
}

// FUNCION DIBUJAR AHORCADO CANVAS
function dibujarAhorcado() {

    ctx.lineWidth = 3;

    switch (errores) {
        case 1:
            // base
            ctx.beginPath();
            ctx.moveTo(20, 280);
            ctx.lineTo(150, 280);
            ctx.stroke();
            break;

        case 2:
            // poste vertical
            ctx.beginPath();
            ctx.moveTo(70, 280);
            ctx.lineTo(70, 50);
            ctx.stroke();
            break;

        case 3:
            // poste horizontal
            ctx.beginPath();
            ctx.moveTo(70, 50);
            ctx.lineTo(180, 50);
            ctx.stroke();
            break;

        case 4:
            // cuerda
            ctx.beginPath();
            ctx.moveTo(180, 50);
            ctx.lineTo(180, 80);
            ctx.stroke();
            break;

        case 5:
            // cabeza
            ctx.beginPath();
            ctx.arc(180, 100, 20, 0, Math.PI * 2);
            ctx.stroke();
            break;

        case 6:
            // cuerpo
            ctx.beginPath();
            ctx.moveTo(180, 120);
            ctx.lineTo(180, 200);
            ctx.stroke();
            break;

        case 7:
            // brazo izquierdo
            ctx.beginPath();
            ctx.moveTo(180, 140);
            ctx.lineTo(150, 170);
            ctx.stroke();
            break;

        case 8:
            // brazo derecho
            ctx.beginPath();
            ctx.moveTo(180, 140);
            ctx.lineTo(210, 170);
            ctx.stroke();
            break;

        case 9:
            // pierna izquierda
            ctx.beginPath();
            ctx.moveTo(180, 200);
            ctx.lineTo(150, 240);
            ctx.stroke();
            break;

        case 10:
            // pierna derecha
            ctx.beginPath();
            ctx.moveTo(180, 200);
            ctx.lineTo(210, 240);
            ctx.stroke();
            break;
    }
}

// ESTILOS CSS DESDE JAVASCRIPT
// ESTILOS GENERALES
document.body.style.fontFamily = "Arial, sans-serif";
document.body.style.backgroundColor = "#fffffff6";
document.body.style.margin = "0";
document.body.style.padding = "20px";

contenedorPrincipal.style.maxWidth = "900px";
contenedorPrincipal.style.margin = "0 auto";

canvas.style.backgroundColor = "#ffffff";
canvas.style.border = "2px solid #333";
canvas.style.borderRadius = "10px";
