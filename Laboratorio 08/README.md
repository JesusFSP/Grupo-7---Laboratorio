# Desarrollo de Aplicaciones Web - Grupo 7

Repositorio correspondiente al Laboratorio 08 del curso de Desarrollo de Aplicaciones Web (DAW) de la Escuela Profesional de Ingeniería de Sistemas - UNSA.

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

# Laboratorio 08: Django REST Framework y Swagger API

El presente laboratorio consiste en la transformación del sistema de gestión de restaurante desarrollado en laboratorios anteriores hacia una arquitectura basada en servicios REST utilizando Django REST Framework (DRF).

Durante el desarrollo se implementaron serializadores, vistas JSON y endpoints REST capaces de exponer los datos almacenados en la base de datos SQLite. Asimismo, se incorporó documentación interactiva mediante Swagger UI utilizando la librería drf-spectacular y el estándar OpenAPI 3.0.

---

## Objetivos del Laboratorio

* Implementar APIs REST utilizando Django REST Framework.
* Crear serializadores para la conversión de modelos a JSON.
* Implementar serializadores planos y serializadores anidados.
* Exponer operaciones CRUD mediante endpoints REST.
* Permitir operaciones GET, POST, PUT y DELETE sin autenticación.
* Generar documentación automática de la API utilizando OpenAPI.
* Integrar Swagger UI para pruebas y exploración de endpoints.
* Validar el funcionamiento de los servicios REST mediante pruebas funcionales.

---

## Tecnologías Utilizadas

* Python 3
* Django
* Django REST Framework (DRF)
* drf-spectacular
* Swagger UI
* OpenAPI 3.0
* SQLite
* Django ORM
* Git y GitHub

---

## Configuración de Django REST Framework

Para incorporar REST Framework al proyecto se agregaron las siguientes aplicaciones al archivo `settings.py`:

```python
INSTALLED_APPS = [
    'rest_framework',
    'drf_spectacular',
    'MyWebApps.MyFirstApplication',
]
```

Se configuró además el esquema OpenAPI y los permisos globales:

```python
REST_FRAMEWORK = {
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.AllowAny',
    ],
    'DEFAULT_SCHEMA_CLASS': 'drf_spectacular.openapi.AutoSchema',
}
```

Configuración de Swagger:

```python
SPECTACULAR_SETTINGS = {
    'TITLE': 'Restaurante API',
    'DESCRIPTION': 'API REST para la gestión de clientes, mesas, menú y reservas.',
    'VERSION': '1.0.0',
    'SERVE_INCLUDE_SCHEMA': False,
}
```

---

## Documentación Automática con Swagger

Se incorporó la documentación interactiva utilizando las vistas proporcionadas por drf-spectacular.

Rutas implementadas:

```python
path('api/schema/', SpectacularAPIView.as_view(), name='schema')
path('api/docs/', SpectacularSwaggerView.as_view(url_name='schema'), name='swagger-ui')
```

Acceso local:

```text
http://127.0.0.1:8000/api/docs/
```

Desde Swagger UI es posible:

* Consultar todos los endpoints disponibles.
* Ejecutar operaciones GET.
* Crear registros mediante POST.
* Modificar registros mediante PUT.
* Eliminar registros mediante DELETE.
* Visualizar ejemplos JSON y respuestas HTTP.

---

## Serializadores Implementados

La capa de serialización fue desarrollada utilizando `serializers.ModelSerializer`.

### Serializadores Planos

Se utilizaron para operaciones de escritura y consultas simples.

Ejemplo:

```python
class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = '__all__'
```

Características:

* Exponen únicamente los campos directos del modelo.
* Las relaciones se representan mediante identificadores.
* Facilitan operaciones POST, PUT y PATCH.

---

### Serializadores Anidados

Se implementaron para consultas complejas donde se requiere mostrar información relacionada.

Ejemplo conceptual:

```python
class MenuCategoryDetailSerializer(MenuCategorySerializer):
    items = serializers.SerializerMethodField()
```

Características:

* Incluyen información completa de modelos relacionados.
* Reducen la necesidad de múltiples consultas desde el cliente.
* Mejoran la experiencia de consumo de la API.

---

## Modelos Expuestos mediante la API

La API REST permite gestionar los modelos desarrollados en los laboratorios anteriores:

### Customer

Administración de clientes registrados.

### Table

Gestión de mesas del restaurante.

### MenuCategory

Agrupación de categorías del menú.

### MenuItem

Administración de platos y productos.

### Reservation

Gestión de reservas realizadas por los clientes.

---

## Relaciones Expuestas

| Modelo | Relación |
|----------|----------|
| MenuItem → MenuCategory | ForeignKey |
| Reservation → Customer | ForeignKey |
| Reservation → Table | ForeignKey |

---

## Implementación de ViewSets

Las vistas fueron desarrolladas utilizando:

```python
viewsets.ModelViewSet
```

Esta estrategia permite implementar automáticamente las operaciones:

* list
* retrieve
* create
* update
* destroy

correspondientes a los métodos HTTP:

* GET
* POST
* PUT
* DELETE

---

## Selección Dinámica de Serializadores

Para optimizar la respuesta de la API se implementó selección dinámica de serializadores mediante:

```python
def get_serializer_class(self):
```

Comportamiento:

* Operación `retrieve` → serializador anidado.
* Operaciones `list`, `create`, `update` y `destroy` → serializador plano.

Esta estrategia permite consultas detalladas únicamente cuando son necesarias.

---

## Documentación de Endpoints

Las vistas fueron documentadas utilizando decoradores de drf-spectacular:

```python
@extend_schema_view(...)
```

Permitiendo agregar:

* Resúmenes descriptivos.
* Agrupación mediante Tags.
* Información estructurada para Swagger UI.

---

## Operaciones REST Implementadas

La API soporta las siguientes operaciones:

### GET

Consulta de registros existentes.

### POST

Creación de nuevos registros.

### PUT

Actualización de registros existentes.

### DELETE

Eliminación de registros.

Todas las operaciones fueron habilitadas con permisos:

```python
AllowAny
```

sin necesidad de autenticación JWT.

---

## Pruebas Funcionales Realizadas

Durante el laboratorio se verificó:

### Creación de Clientes

* Registro de nuevos clientes mediante POST.
* Respuesta HTTP 201 Created.

### Consulta de Categorías

* Listado completo de categorías.
* Obtención de detalles mediante JSON anidado.

### Consulta de Menú

* Recuperación de platos registrados.
* Visualización de relaciones con categorías.

### Gestión de Reservas

* Modificación de reservas mediante PUT.
* Eliminación mediante DELETE.
* Validación de respuestas HTTP correspondientes.

---

## Resultados Obtenidos

Durante el desarrollo del laboratorio se logró verificar correctamente:

* Integración de Django REST Framework.
* Configuración de OpenAPI mediante drf-spectacular.
* Generación automática de documentación Swagger.
* Creación de serializadores planos.
* Creación de serializadores anidados.
* Implementación de ViewSets.
* Exposición de endpoints REST.
* Operaciones CRUD mediante JSON.
* Consumo interactivo de la API desde Swagger UI.
* Integración correcta con los modelos del sistema de restaurante.

---

## Referencias Bibliográficas

* Django REST Framework. *Serializers*. https://www.django-rest-framework.org/api-guide/serializers/
* Django REST Framework. *ViewSets*. https://www.django-rest-framework.org/api-guide/viewsets/
* drf-spectacular Documentation. https://drf-spectacular.readthedocs.io/
* OpenAPI Specification. https://swagger.io/specification/
* Django REST Framework Official Site. https://www.django-rest-framework.org/

---

© 2026 - Escuela Profesional de Ingeniería de Sistemas - UNSA