// Importamos la libreria express para crear el servidor
const express = require("express");

// Importamos modulos para manejo de archivos y rutas
const fs = require("fs");
const path = require("path");

// Creamos la aplicacion de express
const app = express();

// Definimos el puerto 80 (usado por Docker)
const PORT = 80;

// Permitimos recibir datos en formato JSON
app.use(express.json());

// Permitimos recibir datos desde formularios HTML
app.use(express.urlencoded({ extended: true }));

// Hacemos publica la carpeta "pub" en la ruta /lab03
app.use("/lab03", express.static("pub"));

// Ruta principal al entrar a /lab03
app.get("/lab03", (req, res) => {
    // Enviamos el archivo index.html al navegador
    res.sendFile(__dirname + "/index.html");
});

// ----MANEJO DE EVENTOS DE LA AGENDA----

// ruta para crear evento
app.post("/crear", (req, res) => {

    const { fecha, hora, descripcion } = req.body;

    // ruta de carpeta (priv/fecha) segun estructura del laboratorio
    const carpeta = path.join(__dirname, "priv", fecha);

    // crear carpeta si no existe
    if (!fs.existsSync(carpeta)) {
        fs.mkdirSync(carpeta, { recursive: true });
    }

    // nombre del archivo
    const archivo = path.join(carpeta, hora + ".md");

    // contenido en markdown
    const contenido = descripcion;

    // guardar archivo
    fs.writeFileSync(archivo, contenido);

    res.send("Evento creado correctamente");
});

// ruta para editar evento
app.post("/editar", (req, res) => {

    const { fecha, hora, descripcion } = req.body;

    const archivo = path.join(__dirname, "priv", fecha, hora + ".md");

    if (!fs.existsSync(archivo)) {
        return res.send("El evento no existe");
    }

    const contenido = descripcion;

    fs.writeFileSync(archivo, contenido);

    res.send("Evento actualizado correctamente");
});

// ruta para eliminar evento
app.post("/eliminar", (req, res) => {

    const { fecha, hora } = req.body;

    const carpetaPath = path.join(__dirname, "priv", fecha);
    const archivoPath = path.join(carpetaPath, hora + ".md");

    // 1. Verificar si el archivo existe
    if (!fs.existsSync(archivoPath)) {
        return res.send("El evento no existe");
    }

    // 2. Eliminar el archivo .md
    fs.unlinkSync(archivoPath);

    // 3. Verificar si la carpeta quedó vacía
    const contenidoCarpeta = fs.readdirSync(carpetaPath);
    if (contenidoCarpeta.length === 0) {
        fs.rmdirSync(carpetaPath);
        console.log(`Carpeta ${fecha} eliminada por estar vacía.`);
    }

    res.send("Evento eliminado correctamente");
});

// Iniciamos el servidor en el puerto definido
app.listen(PORT, () => {
    // Mostramos mensaje en consola cuando el servidor esta activo
    console.log("Servidor corriendo en http://localhost:" + PORT);
    console.log("Ingreso a index.html por http://localhost/lab03");
    console.log("Ingreso a index.html por http://127.0.0.1/lab03");
});

// ----LEER EVENTOS DE LA CARPETA PRIV----
// ruta para listar eventos
app.get("/eventos", (req, res) => {

    const base = path.join(__dirname, "priv");

    let resultado = [];

    // verificar si existe carpeta priv
    if (!fs.existsSync(base)) {
        return res.json(resultado);
    }

    // leer carpetas de fechas
    const fechas = fs.readdirSync(base);

    fechas.forEach(fecha => {
        const rutaFecha = path.join(base, fecha);

        const archivos = fs.readdirSync(rutaFecha);

        archivos.forEach(archivo => {
            const contenido = fs.readFileSync(path.join(rutaFecha, archivo), "utf-8");

            resultado.push({
                fecha: fecha,
                hora: archivo.replace(".md", ""),
                contenido: contenido
            });
        });
    });

    res.json(resultado);
});

app.get('/estadisticas', (req, res) => {
  const privDir = path.join(__dirname, 'priv');
  const carpetas = fs.readdirSync(privDir);
  let totalEventos = 0;

  carpetas.forEach(carpeta => {
    const archivos = fs.readdirSync(path.join(privDir, carpeta));
    totalEventos += archivos.filter(file => file.endsWith('.md')).length;
  });

  res.json({
    totalEventos: totalEventos,
    fechasUnicas: carpetas.length
  });
});