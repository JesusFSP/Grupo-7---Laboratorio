# Desarrollo de Aplicaciones Web - Grupo 7

Repositorio dedicado a los laboratorios del curso de Desarrollo de Aplicaciones Web (DAW) de la Escuela Profesional de Ingeniería de Sistemas - UNSA.

## Integrantes
* **Gustavo Linares Aquino**  
  [glinares@unsa.edu.pe](mailto:glinares@unsa.edu.pe)

* **Geisel Reymar Pacheco Medina**  
  [gpachecome@unsa.edu.pe](mailto:gpachecome@unsa.edu.pe)

* **Jesus Francisco Silva Pino**  
  [jsilva@unsa.edu.pe](mailto:jsilva@unsa.edu.pe)

## Docente
* Msc. Julio Augusto Vera Sancho

## Estructura del Repositorio
* `sql/`: Scripts SQL utilizados durante el laboratorio.
    * `ddl.sql`: Creación de tablas y relaciones del modelo físico.
    * `seed.sql`: Inserción de datos iniciales mediante bloques PL/pgSQL.
    * `rls.sql`: Configuración de políticas de seguridad Row Level Security (RLS).

* `informes/`: Documentación del laboratorio.
    * `DAW_lab05_bd.pdf`: Informe completo en formato PDF.

* `images/`: Capturas y evidencias del funcionamiento del laboratorio.
    * `der.png`: Modelo Entidad-Relación (DER).
    * `supabase_tables.png`: Tablas creadas en Supabase.
    * `postman_users.png`: Consulta GET a la tabla users.
    * `postman_students.png`: Consulta GET a la tabla students.
    * `postman_courses.png`: Consulta GET a la tabla courses.
    * `postman_courses_students.png`: Consulta GET a la tabla courses_students.

---

## Laboratorio 05: Base de Datos

Este laboratorio se enfoca en el diseño e implementación de una base de datos relacional utilizando PostgreSQL y Supabase como plataforma Backend-as-a-Service (BaaS). Además, se implementaron políticas de seguridad mediante Row Level Security (RLS) y se validó el acceso a la API REST usando Postman.

### Objetivos del Laboratorio

* Diseñar un Modelo Entidad-Relación (DER) siguiendo las convenciones establecidas en el curso.
* Implementar el modelo físico en PostgreSQL utilizando UUID y atributos de auditoría.
* Desplegar la base de datos en Supabase.
* Configurar políticas de seguridad Row Level Security (RLS).
* Validar operaciones REST mediante Postman.

---

## Modelo Entidad-Relación (DER)

El sistema desarrollado representa un entorno académico de matrículas y está compuesto por las siguientes entidades:

* `users`
* `students`
* `courses`
* `courses_students`

La tabla `courses_students` representa la relación muchos a muchos (N:M) entre cursos y estudiantes, siguiendo la nomenclatura alfabética establecida en las recomendaciones del laboratorio.

### Entidades Principales

#### users
Entidad principal encargada de la gestión de usuarios y auditoría del sistema.

#### students
Almacena la información detallada de los estudiantes y mantiene relación con la tabla `users`.

#### courses
Contiene el catálogo de asignaturas disponibles.

#### courses_students
Tabla intermedia encargada de registrar las matrículas de estudiantes en cursos.

---

## Modelo Físico PostgreSQL

Todas las tablas fueron implementadas siguiendo las recomendaciones del laboratorio:

* Nombres de tablas en inglés y plural.
* Atributos en camelCase.
* Uso de UUID como llave primaria.
* Inclusión obligatoria de atributos de auditoría:
  * `id`
  * `status`
  * `created`
  * `modified`
  * `created_id`
  * `modified_id`

### Tecnologías Utilizadas

* PostgreSQL
* Supabase
* Postman

---

## Configuración de Supabase

La implementación fue desplegada utilizando Supabase como proveedor Backend-as-a-Service (BaaS).

### Procedimiento General

1. Creación del proyecto en Supabase.
2. Ejecución del script `ddl.sql`.
3. Inserción de datos utilizando `seed.sql`.
4. Configuración de políticas RLS mediante `rls.sql`.
5. Validación de endpoints REST usando Postman.

---

## Inserción de Datos (Seeding)

Debido al uso de identificadores UUID autogenerados, se utilizaron bloques anónimos PL/pgSQL para mantener la integridad referencial durante las inserciones.

Se registraron:

* Usuarios del equipo de trabajo.
* Estudiantes.
* Cursos del semestre.
* Matrículas en cursos.

---

## Seguridad: Row Level Security (RLS)

Se habilitó Row Level Security en todas las tablas del sistema:

* `users`
* `students`
* `courses`
* `courses_students`

Posteriormente se crearon políticas públicas de lectura para permitir consultas mediante la API REST de Supabase.

---

## Integración con Postman

Para validar el funcionamiento de la API REST autogenerada por Supabase, se configuró Postman utilizando:

### Variables de Entorno

* `base_url`
* `api_key`

### Headers Utilizados

| Key | Value |
|---|---|
| apikey | {{api_key}} |
| Authorization | Bearer {{api_key}} |
| Content-Type | application/json |

---

## Endpoints Probados

### Obtener usuarios
```http
GET /rest/v1/users
```

### Obtener estudiantes
```http
GET /rest/v1/students
```

### Obtener cursos
```http
GET /rest/v1/courses
```

### Obtener matrículas
```http
GET /rest/v1/courses_students
```