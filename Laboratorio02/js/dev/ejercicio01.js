const contenedor = document.createElement("div");
contenedor.style.width = "650px";
contenedor.style.margin = "20px auto";
contenedor.style.fontFamily = "Arial";
contenedor.style.fontSize = "14px";

const fila1 = document.createElement("div");
fila1.style.marginBottom = "15px";

const texto1 = document.createElement("span");
texto1.innerText = "Seleccione:";
texto1.style.display = "inline-block";
texto1.style.width = "160px";
texto1.style.textAlign = "right";
texto1.style.marginRight = "10px";

const selectTarjeta = document.createElement("select");
selectTarjeta.style.width = "220px";
selectTarjeta.style.height = "30px";

const opcion1 = document.createElement("option");
opcion1.innerText = "Multired Global Débito";

const opcion2 = document.createElement("option");
opcion2.innerText = "Tarjeta de Crédito";

selectTarjeta.appendChild(opcion1);
selectTarjeta.appendChild(opcion2);

fila1.appendChild(texto1);
fila1.appendChild(selectTarjeta);

const fila2 = document.createElement("div");
fila2.style.marginBottom = "15px";

const texto2 = document.createElement("span");
texto2.innerText = "Número de tarjeta:";
texto2.style.display = "inline-block";
texto2.style.width = "160px";
texto2.style.textAlign = "right";
texto2.style.marginRight = "10px";

const inputTarjeta = document.createElement("input");
inputTarjeta.type = "text";
inputTarjeta.value = "4214 ";
inputTarjeta.style.width = "220px";
inputTarjeta.style.height = "26px";

inputTarjeta.oninput = function () {
    let texto = inputTarjeta.value;
    let soloNumeros = "";

    for (let i = 0; i < texto.length; i++) {
        let c = texto[i];
        if (c >= "0" && c <= "9") {
            soloNumeros = soloNumeros + c;
        }
    }

    if (soloNumeros.length < 4) {
        soloNumeros = "4214";
    }

    if (soloNumeros.substring(0, 4) != "4214") {
        soloNumeros = "4214" + soloNumeros.substring(4);
    }

    if (soloNumeros.length > 12) {
        soloNumeros = soloNumeros.substring(0, 12);
    }

    let resultado = "";

    for (let i = 0; i < soloNumeros.length; i++) {
        resultado = resultado + soloNumeros[i];
        if ((i + 1) % 4 == 0 && i != soloNumeros.length - 1) {
            resultado = resultado + " ";
        }
    }

    inputTarjeta.value = resultado;
};

fila2.appendChild(texto2);
fila2.appendChild(inputTarjeta);

const fila3 = document.createElement("div");
fila3.style.marginBottom = "15px";

const texto3 = document.createElement("span");
texto3.innerText = "Tipo y N° Documento:";
texto3.style.display = "inline-block";
texto3.style.width = "160px";
texto3.style.textAlign = "right";
texto3.style.marginRight = "10px";

const selectDoc = document.createElement("select");
selectDoc.style.width = "140px";
selectDoc.style.height = "30px";

const doc1 = document.createElement("option");
doc1.innerText = "DNI";

const doc2 = document.createElement("option");
doc2.innerText = "Carnet de extranjería";

selectDoc.appendChild(doc1);
selectDoc.appendChild(doc2);

const inputDoc = document.createElement("input");
inputDoc.type = "text";
inputDoc.style.width = "120px";
inputDoc.style.height = "26px";
inputDoc.style.marginLeft = "10px";

inputDoc.oninput = function () {
    let texto = inputDoc.value;
    let soloNumeros = "";

    for (let i = 0; i < texto.length; i++) {
        let c = texto[i];
        if (c >= "0" && c <= "9") {
            soloNumeros = soloNumeros + c;
        }
    }

    if (soloNumeros.length > 8) {
        soloNumeros = soloNumeros.substring(0, 8);
    }

    inputDoc.value = soloNumeros;
};

fila3.appendChild(texto3);
fila3.appendChild(selectDoc);
fila3.appendChild(inputDoc);

const fila4 = document.createElement("div");
fila4.style.marginBottom = "20px";

const texto4 = document.createElement("span");
texto4.innerText = "Ingresa tu clave usando\nel teclado virtual:";
texto4.style.display = "inline-block";
texto4.style.width = "160px";
texto4.style.textAlign = "right";
texto4.style.marginRight = "10px";
texto4.style.verticalAlign = "top";

const zonaTeclado = document.createElement("div");
zonaTeclado.style.display = "inline-block";
zonaTeclado.style.verticalAlign = "top";

const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = numeros.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let aux = numeros[i];
    numeros[i] = numeros[j];
    numeros[j] = aux;
}

const bloqueClaveInternet = document.createElement("div");
bloqueClaveInternet.style.display = "inline-block";
bloqueClaveInternet.style.verticalAlign = "top";
bloqueClaveInternet.style.marginLeft = "20px";

const textoLink = document.createElement("div");
textoLink.innerText = "Genera tu Clave de Internet";
textoLink.style.color = "red";
textoLink.style.marginBottom = "10px";

const textoClaveInternet = document.createElement("div");
textoClaveInternet.innerText = "Ingresa tu Clave de Internet (06 dígitos)";
textoClaveInternet.style.marginBottom = "8px";
textoClaveInternet.style.width = "140px";

const inputInternet = document.createElement("input");
inputInternet.type = "password";
inputInternet.readOnly = true;
inputInternet.style.width = "110px";
inputInternet.style.height = "26px";

const textoOlvide = document.createElement("div");
textoOlvide.innerText = "Olvidé-mi-clave";
textoOlvide.style.color = "red";
textoOlvide.style.marginTop = "15px";

for (let i = 0; i < numeros.length; i++) {
    const boton = document.createElement("button");
    boton.innerText = numeros[i];
    boton.style.width = "45px";
    boton.style.height = "32px";
    boton.style.margin = "2px";

    boton.onclick = function () {
        if (inputInternet.value.length < 6) {
            inputInternet.value = inputInternet.value + numeros[i];
        }
    };

    zonaTeclado.appendChild(boton);

    if (i == 2 || i == 5 || i == 8) {
        zonaTeclado.appendChild(document.createElement("br"));
    }
}

const botonLimpiar = document.createElement("button");
botonLimpiar.innerText = "LIMPIAR";
botonLimpiar.style.width = "60px";
botonLimpiar.style.height = "32px";
botonLimpiar.style.margin = "2px";
botonLimpiar.style.textAlign = "center";

botonLimpiar.onclick = function () {
    inputInternet.value = "";
};

zonaTeclado.appendChild(botonLimpiar);

bloqueClaveInternet.appendChild(textoLink);
bloqueClaveInternet.appendChild(textoClaveInternet);
bloqueClaveInternet.appendChild(inputInternet);
bloqueClaveInternet.appendChild(textoOlvide);

fila4.appendChild(texto4);
fila4.appendChild(zonaTeclado);
fila4.appendChild(bloqueClaveInternet);

const fila5 = document.createElement("div");
fila5.style.marginBottom = "15px";

const texto5 = document.createElement("span");
texto5.innerText = "Ingresa el texto de la imagen:";
texto5.style.display = "inline-block";
texto5.style.width = "160px";
texto5.style.textAlign = "right";
texto5.style.marginRight = "10px";
texto5.style.verticalAlign = "top";

const bloqueCaptcha = document.createElement("div");
bloqueCaptcha.style.display = "inline-block";

const captchaTexto = document.createElement("div");
captchaTexto.innerText = "WR4FK";
captchaTexto.style.fontSize = "30px";
captchaTexto.style.fontWeight = "bold";
captchaTexto.style.marginBottom = "8px";

const cambiarTexto = document.createElement("div");
cambiarTexto.innerText = "Cambiar texto";
cambiarTexto.style.color = "red";
cambiarTexto.style.cursor = "pointer";
cambiarTexto.style.marginBottom = "8px";

cambiarTexto.onclick = function () {
    const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let nuevo = "";

    for (let i = 0; i < 5; i++) {
        let pos = Math.floor(Math.random() * letras.length);
        nuevo = nuevo + letras[pos];
    }

    captchaTexto.innerText = nuevo;
};

const inputCaptcha = document.createElement("input");
inputCaptcha.type = "text";
inputCaptcha.style.width = "120px";
inputCaptcha.style.height = "26px";

const mensajeError = document.createElement("div");
mensajeError.style.color = "red";
mensajeError.style.marginTop = "5px";

bloqueCaptcha.appendChild(captchaTexto);
bloqueCaptcha.appendChild(cambiarTexto);
bloqueCaptcha.appendChild(inputCaptcha);
bloqueCaptcha.appendChild(mensajeError);

fila5.appendChild(texto5);
fila5.appendChild(bloqueCaptcha);

const fila6 = document.createElement("div");
fila6.style.textAlign = "center";
fila6.style.marginTop = "25px";

const botonIngresar = document.createElement("button");
botonIngresar.innerText = "INGRESAR";
botonIngresar.style.width = "120px";
botonIngresar.style.height = "36px";
botonIngresar.style.backgroundColor = "red";
botonIngresar.style.color = "white";

botonIngresar.onclick = function () {
    if (inputCaptcha.value != captchaTexto.innerText) {
        mensajeError.innerText = "El texto no coincide";
    } else {
        mensajeError.innerText = "";
        alert("Datos ingresados");
    }
};

fila6.appendChild(botonIngresar);

contenedor.appendChild(fila1);
contenedor.appendChild(fila2);
contenedor.appendChild(fila3);
contenedor.appendChild(fila4);
contenedor.appendChild(fila5);
contenedor.appendChild(fila6);

document.body.appendChild(contenedor);