# Laboratorio 03: JavaScript Backend con Node.js y Express

Este proyecto consiste en una **Agenda Personal** desarrollada como parte del curso de Desarrollo de Aplicaciones Web. La aplicación permite la gestión integral de eventos (CRUD) utilizando Node.js en el servidor y el sistema de archivos (File System) para la persistencia de datos en formato Markdown.

## 👥 Integrantes - Grupo 7
*   Silva Pino Jesus Francisco
*   Pacheco Medina Geisel Reymar
*   Linares Aquino Gustavo

## 🚀 Características
*   **Backend**: Implementado con Express.js.
*   **Persistencia**: Almacenamiento jerárquico en carpetas por fecha dentro de `/priv`.
*   **Frontend Dinámico**: Interfaz única que utiliza `fetch` para operaciones sin recargar la página.
*   **Markdown**: Visualización de descripciones con formato enriquecido mediante la librería `Marked`.
*   **Estadísticas**: Conteo en tiempo real de eventos totales y fechas únicas registradas.
*   **Limpieza Automática**: Eliminación de directorios vacíos al borrar el último evento de una fecha.

## 🛠️ Tecnologías Utilizadas
*   **Node.js** (v18+)
*   **Express.js**
*   **Docker**
*   **Librerías**: `marked` (Markdown parsing)
## 📂 Estructura de Archivos
La organización de los archivos sigue la estructura requerida para el despliegue y la persistencia de datos:
```text
Laboratorio_03/
├── index.js            # Servidor principal y rutas de la API
├── index.html          # Interfaz de usuario principal
├── Dockerfile          # Configuración de la imagen Docker
├── package.json        # Dependencias y scripts del proyecto
├── priv/               # Almacenamiento persistente de eventos (.md)
│   └── [YYYY.MM.DD]/   # Carpetas organizadas por fecha
│       └── [HH.MM].md  # Archivos de eventos en Markdown
└── pub/                # Archivos estáticos accesibles al cliente
    ├── css/
    │   └── style.css   # Estilos visuales de la aplicación
    └── js/
        └── agenda.js   # Lógica del frontend y Fetch API
```

## 📦 Protocolo de Despliegue (Docker)

Para ejecutar esta aplicación en cualquier entorno con Docker (como Ubuntu MATE), siga estos pasos:

1.  **Despliegue contenedor Docker**

    ```docker build . -t i_daw_8080```

    ```docker run -d --name c_daw_8080 -p 8080:80 i_daw_8080```

2.  **Acceso la pagina del laboratorio**

    http://127.0.0.1:8080/lab03

3.  **Detener contenedor en ejecucion**
    
    ```docker stop c_daw_8080```
4.  **Eliminar el contenedor**

    ```docker rm c_daw_8080```
5.  **Eliminar la imagen Docker**
    
    ```docker rmi i_daw_8080```

6.  **Acceso a la aplicación:**

    Abra su navegador e ingrese a la siguiente dirección:

    [http://localhost:8080/lab03](http://localhost:8080/lab03)

---
## ⚙️ Funcionamiento del CRUD

El sistema gestiona la persistencia de datos mediante la manipulación directa de archivos en el servidor utilizando el módulo `fs` de Node.js:

### 1. Create (Crear)
*   **Proceso**: El usuario completa el formulario y envía los datos mediante una petición `POST` a `/crear`.
*   **Acción**: El servidor verifica si existe la carpeta de la fecha; si no, la crea y guarda un archivo `.md` nombrado con la hora del evento.

### 2. Read (Leer)
*   **Proceso**: Al cargar la página, el frontend realiza una petición `GET` a `/eventos`.
*   **Acción**: El servidor escanea recursivamente la carpeta `/priv`, lee el contenido de cada archivo y devuelve un objeto JSON con todos los eventos organizados.

### 3. Update (Actualizar)
*   **Proceso**: Al presionar "Editar", los datos se cargan en el formulario. Al guardar, se envía una petición `POST` a `/editar`.
*   **Acción**: El servidor sobrescribe el archivo `.md` correspondiente con la nueva descripción proporcionada.

### 4. Delete (Eliminar)
*   **Proceso**: El usuario presiona el botón "Eliminar", enviando la fecha y hora a la ruta `/eliminar`.
*   **Acción**: El servidor elimina el archivo físico. Adicionalmente, se verifica si la carpeta de la fecha ha quedado vacía para proceder a eliminarla también, manteniendo la integridad de las estadísticas.


## 📺 Video de Demostración
[Ver video de prueba - Laboratorio 03](https://youtu.be/6Ydu2bIzOag)

---
© 2026 - Escuela Profesional de Ingeniería de Sistemas - UNSA