# Laboratorio 02: JavaScript en el Cliente y Despliegue con Docker

Este repositorio contiene la implementación del **Laboratorio 02** correspondiente al curso de **Programación / Desarrollo de Aplicaciones Web**. El objetivo principal fue aplicar conceptos de **JavaScript nativo (Vanilla JS)** para construir interfaces dinámicas desde el cliente, implementar estructuras de datos en el navegador y desplegar la solución utilizando **Docker**.

El laboratorio se desarrolló siguiendo la consigna de que el contenido visual de cada página web debía ser generado completamente mediante JavaScript, manteniendo el `<body>` vacío en los archivos HTML base.

---

# 👥 Integrantes - Grupo 7

* **Gustavo Linares Aquino**
  [glinares@unsa.edu.pe](mailto:glinares@unsa.edu.pe)

* **Geisel Reymar Pacheco Medina**
  [gpachecome@unsa.edu.pe](mailto:gpachecome@unsa.edu.pe)

* **Jesus Francisco Silva Pino**
  [jsilva@unsa.edu.pe](mailto:jsilva@unsa.edu.pe)

---

# 🏫 Información Académica

* **Universidad:** Universidad Nacional de San Agustín de Arequipa
* **Escuela Profesional:** Ingeniería de Sistemas
* **Curso:** Programación
* **Laboratorio:** 02
* **Tema:** JavaScript en el Cliente
* **Docente:** Julio Augusto Vera Sancho
* **Semestre:** 2026 - A

---

# 🛠️ Tecnologías Utilizadas

* **Lenguaje Principal:** JavaScript (Vanilla JS)
* **Frontend Base:** HTML5
* **Manipulación Visual:** DOM API
* **Gráficos:** HTML5 Canvas API
* **Servidor Web:** Nginx Alpine
* **Contenedorización:** Docker
* **Protección de Código:** JavaScript Obfuscator
* **Control de Versiones:** Git / GitHub

---

# 🎯 Objetivos del Laboratorio

* Aplicar JavaScript puro sin frameworks.
* Generar interfaces dinámicamente mediante DOM.
* Implementar estructuras de datos del lado cliente.
* Crear versiones de desarrollo y producción.
* Aplicar ofuscación al código JavaScript.
* Desplegar aplicaciones usando Docker.
* Utilizar buenas prácticas de organización del proyecto.

---

# 🚀 Contenido del Laboratorio

El laboratorio contiene tres ejercicios principales:

---

## 1️⃣ Ejercicio 01: Teclado Numérico Dinámico

Simulación de teclado numérico similar a sistemas bancarios seguros.

### Funcionalidades:

* Botones generados dinámicamente.
* Orden aleatorio en cada carga.
* Prevención de rastreo por patrón fijo.
* Eventos click en tiempo real.

### Conceptos aplicados:

* `document.createElement()`
* `appendChild()`
* Eventos DOM
* Arrays y randomización

---

## 2️⃣ Ejercicio 02: Calculadora con Historial (Pila)

Calculadora funcional que registra operaciones mediante una estructura de datos tipo **Stack (LIFO)**.

### Funcionalidades:

* Operaciones aritméticas básicas.
* Evaluación mediante `eval()`.
* Historial dinámico.
* Última operación visible primero.

### Conceptos aplicados:

* Pilas (Stack)
* Arrays dinámicos
* Manipulación DOM
* Templates strings

---

## 3️⃣ Ejercicio 03: Juego del Ahorcado (Canvas)

Juego interactivo desarrollado con JavaScript y la API gráfica de Canvas.

### Funcionalidades:

* Dibujo progresivo del personaje.
* Intentos limitados.
* Palabras aleatorias.
* Victoria y derrota.

### Conceptos aplicados:

* Canvas API
* Eventos teclado
* Condicionales
* Manipulación del estado del juego

---

# 📁 Estructura del Proyecto

```text
Grupo-7---Laboratorio/
│── Laboratorio 02/
│   │── index.html
│   │── ejercicio01.html
│   │── ejercicio02.html
│   │── ejercicio03.html
│   │
│   ├── js/
│   │   ├── dev/
│   │   │   ├── ejercicio01.js
│   │   │   ├── ejercicio02.js
│   │   │   └── ejercicio03.js
│   │   │
│   │   └── prod/
│   │       ├── ejercicio01.min.js
│   │       ├── ejercicio02.min.js
│   │       └── ejercicio03.min.js
│   │
│   ├── img/
│   ├── Dockerfile
│   └── README.md
```

---

# 🔒 Versiones del Código

## Desarrollo (`js/dev/`)

Contiene archivos:

* Legibles
* Comentados
* Editables
* Ideales para mantenimiento

## Producción (`js/prod/`)

Contiene archivos:

* Minificados
* Ofuscados
* Más rápidos
* Difíciles de leer

---

# 🧠 Herramienta de Ofuscación

Se utilizó:

```bash
javascript-obfuscator
```

Ejemplo:

```bash
javascript-obfuscator ejercicio01.js --output ejercicio01.min.js
```

---

# 📦 Instalación y Despliegue con Docker

## Paso 1: Clonar el repositorio

```bash
git clone https://github.com/JesusFSP/Grupo-7---Laboratorio.git
cd Grupo-7---Laboratorio/Laboratorio\ 02
```

---

## Paso 2: Construir la imagen Docker

```bash
docker build -t lab02-js-cliente .
```

---

## Paso 3: Ejecutar contenedor

```bash
docker run -d -p 80:80 --name servidor-lab02 lab02-js-cliente
```

---

## Paso 4: Verificar contenedor

```bash
docker ps
```

---

# 🌐 Acceso Web

Una vez iniciado:

### Página principal

http://localhost/lab02/index.html

### Ejercicio 01

http://localhost/lab02/ejercicio01.html

### Ejercicio 02

http://localhost/lab02/ejercicio02.html

### Ejercicio 03

http://localhost/lab02/ejercicio03.html

---

# 🐳 Dockerfile Utilizado

```dockerfile
FROM nginx:alpine

COPY . /usr/share/nginx/html/lab02

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
```

---

# ✅ Resultados Obtenidos

Se verificó correctamente:

* Generación dinámica de interfaces.
* Funcionamiento del teclado aleatorio.
* Funcionamiento de calculadora con historial.
* Ejecución del juego del ahorcado.
* Código ofuscado cargando correctamente.
* Despliegue exitoso con Docker.
* Acceso desde navegador local.

---

# 📚 Aprendizajes Alcanzados

* Manipulación profesional del DOM.
* Eventos en JavaScript.
* Uso de estructuras de datos reales.
* Integración con Canvas.
* Seguridad básica mediante ofuscación.
* Docker aplicado a frontend estático.
* Organización profesional de proyectos.

---

# 📺 Video de Demostración

https://www.youtube.com/watch?v=0QKKT-QDJCg

---

# 🔗 Repositorio Oficial

https://github.com/JesusFSP/Grupo-7---Laboratorio.git

---

# 📖 Referencias

* Docker Docs: https://docs.docker.com/
* MDN Web Docs: https://developer.mozilla.org/
* Nginx Docs: https://nginx.org/
* JavaScript Obfuscator: https://obfuscator.io/
* HTML Canvas API: https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API

---

# 📌 Estado del Proyecto

✅ Finalizado
✅ Funcional
✅ Dockerizado
✅ Documentado
✅ Listo para evaluación académica

---

# ✨ Autoría

Desarrollado por **Grupo 7**
Universidad Nacional de San Agustín de Arequipa
Escuela Profesional de Ingeniería de Sistemas
