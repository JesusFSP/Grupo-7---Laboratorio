# Desarrollo de Aplicaciones Web - Grupo 7 🚀

Repositorio correspondiente al Laboratorio 08 del curso de Desarrollo de Aplicaciones Web (DAW) de la Escuela Profesional de Ingeniería de Sistemas - UNSA.

## 👥 Integrantes
- **Gustavo Linares Aquino** - glinares@unsa.edu.pe
- **Geisel Reymar Pacheco Medina** - gpachecome@unsa.edu.pe
- **Jesus Francisco Silva Pino** - jsilva@unsa.edu.pe

## 👨‍🏫 Docente
- Msc. Julio Augusto Vera Sancho

---

## 📖 Laboratorio 08: Django REST Framework y Swagger API

Este proyecto consiste en la implementación de una API REST para el sistema de gestión de un restaurante tipo Steakhouse. Se ha desarrollado utilizando **Django REST Framework (DRF)** y documentado con la especificación OpenAPI 3.0 mediante **drf-spectacular (Swagger UI)**.

### 🛠️ Tecnologías Utilizadas
- **Backend:** Python 3, Django, Django REST Framework (DRF)
- **Base de Datos:** SQLite, Django ORM
- **Documentación API:** drf-spectacular (Swagger UI)

---

## ⚙️ Instrucciones de Instalación y Ejecución

Sigue estos pasos para desplegar el proyecto en tu entorno local:

### 1. Clonar el repositorio
```bash
git clone https://github.com/JesusFSP/Grupo-7---Laboratorio.git
cd Grupo-7---Laboratorio/exercises/MyDjangoProject
```

### 2. Crear y activar el entorno virtual
Es una buena práctica aislar las dependencias del proyecto.
- **En GNU/Linux o macOS:**
  ```bash
  python3 -m venv my_env
  source my_env/bin/activate
  ```
- **En Windows:**
  ```cmd
  python -m venv my_env
  my_env\Scripts\activate
  ```

### 3. Instalar las dependencias
```bash
pip install -r requirements.txt
```

### 4. Sincronizar la base de datos
Aplica las migraciones pendientes hacia SQLite:
```bash
python manage.py makemigrations
python manage.py migrate
```

### 5. Iniciar el servidor
```bash
python manage.py runserver
```

---

## 🧠 Arquitectura de las Vistas y Serializadores

El sistema utiliza **ViewSets** (`ModelViewSet`), lo que permite generar automáticamente las operaciones CRUD completas (GET, POST, PUT, PATCH, DELETE) para cada recurso sin tener que programar cada método individualmente.

**Intercambio Dinámico de Serializadores:**
Las vistas están configuradas para ser inteligentes e implementan el método `get_serializer_class()` para evaluar la petición:
- **Serializador Plano:** Para operaciones de listado o escritura (`list`, `create`, `update`). Optimiza el ancho de banda y simplifica las inserciones.
- **Serializador Anidado:** Para lecturas detalladas (`retrieve`). Devuelve un JSON enriquecido, expandiendo las llaves foráneas para mostrar la información completa del recurso relacionado (ej. una categoría con todos sus platos).

---

## 📖 Documentación Interactiva (Swagger UI)

El proyecto cuenta con documentación autogenerada y visualmente amigable gracias a Swagger.

- **Ruta de acceso:** `http://127.0.0.1:8000/api/docs/`
- **¿Qué puedes hacer aquí?**
  - Explorar todos los endpoints disponibles agrupados por categoría.
  - Interactuar con la API mediante el botón *"Try it out"*, realizando peticiones GET, POST, PUT y DELETE directamente desde el navegador en tiempo real, reemplazando la necesidad de usar Postman.

---

## 📚 Referencias y Bibliografía
- Django Software Foundation. (2026). *Django Documentation*. https://docs.djangoproject.com/
- Django REST Framework. (2026). *API Guide (Serializers & Viewsets)*. https://www.django-rest-framework.org/
- Franzel, T. (2026). *drf-spectacular Documentation*. https://drf-spectacular.readthedocs.io/

---
*© 2026 - Escuela Profesional de Ingeniería de Sistemas - UNSA*
