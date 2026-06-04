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

### 2. Detalle de las Vistas Implementadas

Todas las vistas utilizan funciones nativas que reciben un objeto `request` y devuelven una respuesta estructurada mediante `render()`, inyectando diccionarios de contexto con datos dinámicos extraídos mediante el ORM.

#### A. Vista de Inicio (`home`)
* **Función:** Controla el punto de acceso principal del sitio web del restaurante.
* **Lógica:** Renderiza una plantilla estático-dinámica (`home.html`) que introduce al usuario al sistema de gestión de parrillas (Steakhouse).

#### B. Vista de Categorías (`category_list`)
* **Función:** Expone los diferentes grupos de comidas disponibles.
* **Consulta ORM:** Realiza un mapeo relacional directo recuperando únicamente los registros que superan el borrado lógico:
    ```python
    categories = MenuCategory.objects.filter(status=True)
    ```
* **Presentación:** Envía la colección al template `category_list.html` para listar elementos como "Cortes Premium", "Guarniciones" o "Bebidas".

#### C. Vista del Menú (`menu_list`)
* **Función:** Muestra la carta detallada de platos y cortes de carne disponibles.
* **Optimización ORM:** Para evitar el problema de rendimiento de consultas *N+1*, se implementa un método de carga optimizada (`select_related`) que realiza un `JOIN` SQL explícito a nivel de base de datos para traer los datos de la categoría adjunta en una única transacción:
    ```python
    menu_items = MenuItem.objects.select_related('category').filter(status=True)
    ```
* **Template:** `menu_list.html`, encargado de renderizar de forma tabular los platos, sus precios formateados y sus especificaciones (como indicadores de platos vegetarianos).

#### D. Vista de Mesas (`table_list`)
* **Función:** Muestra la distribución y el estado de los espacios físicos del local.
* **Lógica:** Filtra las mesas activas del restaurante utilizando:
    ```python
    tables = Table.objects.filter(status=True)
    ```
* **Template:** `table_list.html`, que expone visualmente el número de mesa, la capacidad de comensales y su salón/ubicación (Terraza, Salón Interior, Zona VIP).

#### E. Vista de Reservaciones (`reservation_list`)
* **Función:** Permite auditar y listar las reservaciones vigentes en el Steakhouse.
* **Optimización ORM:** Dado que el modelo `Reservation` funciona como una tabla transaccional intermedia conectada a múltiples entidades, se optimizó la consulta concatenando las claves foráneas de clientes y mesas mediante carga eficiente:
    ```python
    reservations = Reservation.objects.select_related('customer', 'table').filter(status=True)
    ```
* **Template:** `reservation_list.html`, el cual genera una bitácora detallada mostrando el nombre completo del cliente, la mesa asignada, la fecha programada y el conteo de invitados.

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