# Desarrollo de Aplicaciones Web - Grupo 7

Repositorio correspondiente al Laboratorio 06 del curso de Desarrollo de Aplicaciones Web (DAW) de la Escuela Profesional de Ingeniería de Sistemas - UNSA.

## Integrantes
* **Gustavo Linares Aquino**  
  glinares@unsa.edu.pe

* **Geisel Reymar Pacheco Medina**  
  gpachecome@unsa.edu.pe

* **Jesus Francisco Silva Pino**  
  jsilva@unsa.edu.pe

## Docente
* Msc. Julio Augusto Vera Sancho

---

# Laboratorio 06: Django Admin

El presente laboratorio consiste en el desarrollo de una aplicación web utilizando Django y Django Admin para la gestión de información mediante un panel administrativo.

Durante el laboratorio se configuró un entorno virtual en Python, se creó un proyecto Django modularizado y se implementó un sistema orientado a la administración de un restaurante tipo Steakhouse utilizando modelos relacionales, validaciones personalizadas y el ORM de Django.

---

## Objetivos del Laboratorio

* Configurar un entorno virtual para proyectos Python.
* Instalar y configurar Django.
* Crear un proyecto Django estructurado correctamente.
* Implementar modelos independientes utilizando modularización.
* Aplicar migraciones sobre SQLite.
* Utilizar Django Admin como interfaz CRUD.
* Implementar restricciones y validaciones de negocio.
* Aplicar relaciones entre modelos utilizando ForeignKey.

---

## Tecnologías Utilizadas

* Python 3
* Django
* SQLite
* Django ORM
* Django Admin
* Git y GitHub
* Ubuntu WSL

---

## Estructura del Proyecto

```text
Laboratorio 06/
├── .gitignore
├── requirements.txt
└── exercises/
    └── MyDjangoProject/
        ├── db.sqlite3
        ├── manage.py
        ├── MyDjangoProject/
        │   ├── __init__.py
        │   ├── asgi.py
        │   ├── settings.py
        │   ├── urls.py
        │   └── wsgi.py
        └── MyWebApps/
            └── MyFirstApplication/
                ├── __init__.py
                ├── admin.py
                ├── apps.py
                ├── tests.py
                ├── views.py
                ├── models.py.deprecated
                ├── migrations/
                │   ├── __init__.py
                │   └── 0001_initial.py
                └── models/
                    ├── __init__.py
                    ├── BaseModel.py
                    ├── Customer.py
                    ├── Table.py
                    ├── MenuCategory.py
                    ├── MenuItem.py
                    └── Reservation.py
```

---

## Configuración del Entorno Virtual

### Crear entorno virtual

```bash
python3 -m venv my_env
```

### Activar entorno virtual

```bash
source my_env/bin/activate
```

### Instalar dependencias

```bash
pip install Django
```

### Generar requirements.txt

```bash
pip freeze > requirements.txt
```

---

## Configuración del Proyecto Django

### Crear proyecto principal

```bash
django-admin startproject MyDjangoProject
```

### Crear aplicación

```bash
django-admin startapp MyFirstApplication
```

### Ejecutar migraciones

```bash
python manage.py makemigrations MyFirstApplication
python manage.py migrate
```

### Crear superusuario

```bash
python manage.py createsuperuser
```

### Ejecutar servidor

```bash
python manage.py runserver
```

---

## Panel de Administración Django

El sistema utiliza Django Admin como interfaz principal de administración y pruebas CRUD.

Acceso local:

```text
http://127.0.0.1:8000/admin/
```

Desde el panel administrativo se validó:

* Inserción de categorías del menú.
* Registro de clientes.
* Gestión de mesas.
* Registro de platos.
* Creación de reservas.
* Aplicación de restricciones y validaciones.

---

## Modelos Implementados

### BaseModel

Modelo abstracto utilizado para reutilizar atributos comunes:

* UUID como llave primaria.
* Estado lógico del registro.
* Fechas de creación y modificación.
* Campos de auditoría.

### Customer

Gestiona la información de clientes del restaurante.

Características:

* Conversión automática de nombres a mayúsculas mediante `save()`.
* Validación de correo único.

### Table

Representa las mesas físicas del local.

Incluye:

* Número de mesa único.
* Capacidad de personas.
* Ubicación mediante `choices`.
* Estado de disponibilidad.

### MenuCategory

Agrupa los platos del restaurante.

Características:

* Conversión automática a mayúsculas.
* Organización jerárquica de productos.

### MenuItem

Representa los platos del menú.

Incluye:

* Relación ForeignKey con `MenuCategory`.
* Precio.
* Indicador vegetariano.

### Reservation

Tabla transaccional encargada de las reservas.

Características implementadas:

* Relación con clientes y mesas.
* Validación personalizada mediante `clean()`.
* Restricción `UniqueConstraint`.
* Validación de capacidad máxima de invitados.

---

## Relaciones Implementadas

| Modelo | Relación |
|---|---|
| MenuItem → MenuCategory | ForeignKey |
| Reservation → Customer | ForeignKey |
| Reservation → Table | ForeignKey |

---

## Validaciones Implementadas

### Conversión automática a mayúsculas

Aplicada en:

* `Customer`
* `MenuCategory`

mediante sobreescritura del método:

```python
save()
```

### Restricción de capacidad de mesas

Implementada en `Reservation.py` mediante:

```python
clean()
```

La validación evita registrar reservas cuya cantidad de invitados exceda la capacidad física de la mesa.

### Restricción de unicidad

Se implementó:

```python
UniqueConstraint
```

para evitar reservas duplicadas en una misma mesa y fecha.

---

## Configuración de Django Admin

Se personalizó el archivo `admin.py` utilizando subclases de `admin.ModelAdmin`.

Funcionalidades agregadas:

* `list_display`
* `search_fields`
* `list_filter`

Esto permitió optimizar la visualización y administración de registros desde Django Admin.

---

## Migraciones

Las migraciones fueron generadas utilizando:

```bash
python manage.py makemigrations MyFirstApplication
python manage.py migrate
```

El sistema utiliza SQLite como motor de base de datos local.

---

## Resultados Obtenidos

Durante el laboratorio se verificó correctamente:

* Configuración del entorno virtual.
* Modularización de modelos.
* Uso de herencia mediante modelos abstractos.
* Funcionamiento del ORM de Django.
* Creación de relaciones entre tablas.
* Funcionamiento del panel Django Admin.
* Aplicación de validaciones y restricciones.
* Integración correcta de migraciones.

---


## Implementación de Vistas (Django Views) - Laboratorio 07

En esta fase del proyecto, se migró de la gestión exclusiva en el backend (Django Admin) hacia la capa de presentación al usuario mediante el patrón **MVT (Model-View-Template)**. Se implementaron vistas basadas en funciones (FBV - Function-Based Views) encargadas de interceptar las peticiones HTTP, interactuar con el ORM de Django para extraer la información de la base de datos SQLite y renderizar las plantillas HTML dinámicas.



### 1. Flujo de Control e Infraestructura de Rutas

El enrutamiento se estructuró de forma modular, dividiendo las responsabilidades entre el núcleo del proyecto y la aplicación interna:

* **`MyDjangoProject/urls.py` (Core):** Centraliza el acceso global delegando el espacio de nombres de la aplicación mediante la función `include()`.
* **`MyWebApps/MyFirstApplication/urls.py` (App):** Define los endpoints específicos del restaurante, asociando expresiones de rutas limpias con sus respectivas funciones controladoras en `views.py`.

### Detalle de las Vistas Implementadas (`views.py`)

Todas las vistas implementadas utilizan la función nativa `render()` de Django. Esta función recibe el objeto de petición (`request`), la ruta de la plantilla HTML, y un diccionario de contexto que inyecta los datos dinámicos extraídos de los modelos.

1. **Vista de Inicio (`home`):**
   * Controla el punto de acceso principal del sitio web del Steakhouse. Renderiza la plantilla estática `home.html` que da la bienvenida al sistema sin requerir transacciones con la base de datos.

2. **Vista de Categorías (`category_list`):**
   * Emplea el ORM mediante la instrucción `MenuCategory.objects.all()` para recuperar el listado completo de las agrupaciones de comida (ej. Cortes Premium, Bebidas) y las inyecta en la plantilla `category_list.html` a través del contexto `{'categories': categories}`.

3. **Vista del Menú (`menu_list`):**
   * Se encarga de exponer la carta del restaurante. Utiliza la consulta `MenuItem.objects.all()` para extraer todos los platos registrados y sus atributos (como el precio) enviándolos al template `menu_list.html` bajo la llave de contexto `{'items': items}`.

4. **Vista de Mesas (`table_list`):**
   * Muestra la distribución de los espacios físicos del local. Recupera todos los registros mediante `Table.objects.all()` para que la plantilla `table_list.html` pueda iterar sobre ellas y mostrar capacidades o ubicaciones.

5. **Vista de Reservaciones (`reservation_list`):**
   * Gestiona la presentación del historial de citas. Utiliza `Reservation.objects.all()` para obtener todas las reservas efectuadas, trasladando esta colección a la vista `reservation_list.html` para auditar la asignación de mesas a los comensales.
### 3. Mecanismo de Renderizado y Contexto
Cada función controladora procesa la lógica interna dentro de un bloque estructurado que mitiga excepciones de base de datos vacía. El diccionario de contexto actúa como el canal seguro de transferencia de objetos hacia la capa View del navegador, logrando un desacoplamiento óptimo entre el motor relacional y el marcado HTML.

***

### Referencias y Bibliografía

* **Django Software Foundation.** (2026). *Django Documentation (Sitio Oficial)*. Recuperado de `https://docs.djangoproject.com/`
* **Django Software Foundation.** (2026). *Distribuidor de URL de Django (URL dispatcher)*. Recuperado de `https://docs.djangoproject.com/en/stable/topics/http/urls/`
* **Django Software Foundation.** (2026). *Vistas de escritura (Writing views)*. Recuperado de `https://docs.djangoproject.com/en/stable/topics/http/views/`
* **Django Software Foundation.** (2026). *Optimización del acceso a la base de datos: select_related*. Recuperado de `https://docs.djangoproject.com/en/stable/ref/models/querysets/#select-related`
* **Django Software Foundation.** (2026). *Referencia de campos de modelos (Model Field Reference)*. Recuperado de `https://docs.djangoproject.com/en/4.1/ref/models/fields/`
* **Django Software Foundation.** (2026). *Sitio de administración de Django (Django Admin)*. Recuperado de `https://docs.djangoproject.com/en/4.1/ref/contrib/admin/`
* **MDN Web Docs.** (2025). *Tutorial de Django (Server-side web framework)*. Mozilla Developer Network. Recuperado de `https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django`
* **MDN Web Docs.** (2025). *Tutorial de Django Parte 5: Creando nuestra página de inicio (Vistas y Plantillas)*. Mozilla Developer Network. Recuperado de `https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django/Home_page`
* **Git.** (2026). *Documentación Oficial de Git*. Recuperado de `https://git-scm.com/doc`
* **GitHub.** (2026). *GitHub Docs*. Recuperado de `https://docs.github.com/`

---

© 2026 - Escuela Profesional de Ingeniería de Sistemas - UNSA
