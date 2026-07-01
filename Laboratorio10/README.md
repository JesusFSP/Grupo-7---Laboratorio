# Desarrollo de Aplicaciones Web - Grupo 7 🚀

Repositorio correspondiente al Laboratorio 10 del curso de Desarrollo de Aplicaciones Web (DAW) de la Escuela Profesional de Ingeniería de Sistemas - UNSA.

## 👥 Integrantes
- **Gustavo Linares Aquino** - glinares@unsa.edu.pe
- **Geisel Reymar Pacheco Medina** - gpachecome@unsa.edu.pe
- **Jesus Francisco Silva Pino** - jsilva@unsa.edu.pe

## 👨‍🏫 Docente
- Msc. Julio Augusto Vera Sancho

---

## 📖 Laboratorio 10: React, Vite y Consumo de APIs REST

Este laboratorio consiste en la implementación de una interfaz frontend moderna para el sistema de gestión de restaurante tipo Steakhouse, consumiendo una API REST desarrollada previamente con Django REST Framework.

La aplicación fue desarrollada con **React**, **Vite** y **TypeScript**, aplicando una arquitectura basada en componentes reutilizables, rutas dinámicas con **React Router** y gestión del estado asíncrono mediante **TanStack Query**.

El frontend permite consultar una reserva mediante su ID y mostrar un comprobante visual con los datos del cliente, mesa, fecha, cantidad de comensales y estado de la reserva.

---

## 🎯 Objetivos del Laboratorio

- Crear un proyecto frontend utilizando React, Vite y TypeScript.
- Consumir una API REST desde el frontend usando `fetch`.
- Gestionar peticiones asíncronas mediante TanStack Query.
- Configurar rutas públicas y dinámicas con React Router.
- Implementar componentes reutilizables para la interfaz.
- Mostrar información obtenida desde el backend en una vista tipo comprobante.
- Manejar estados de carga, error y visualización de datos.
- Preparar el proyecto para despliegue en Vercel o Netlify.

---

## 🛠️ Tecnologías Utilizadas

### Frontend
- React
- Vite
- TypeScript
- React Router DOM
- TanStack Query
- CSS

### Backend
- Python
- Django
- Django REST Framework
- SQLite
- django-cors-headers

### Herramientas
- Git y GitHub
- Visual Studio Code
- Navegador web
- Vercel o Netlify para despliegue

---

## 📂 Estructura del Proyecto

La carpeta del Laboratorio 10 se organiza en dos partes principales:

```text
Laboratorio10/
├── backend/
└── frontend/
```

La estructura principal del frontend implementado es:

```text
frontend/
├── package.json
├── vite.config.ts
├── index.html
└── src/
    ├── api/
    │   └── restaurantApi.ts
    ├── components/
    │   ├── ReservationSearch.tsx
    │   ├── ReservationView.tsx
    │   └── RestaurantHeader.tsx
    ├── hooks/
    │   └── useReservation.ts
    ├── pages/
    │   ├── HomePage.tsx
    │   └── ReservationPage.tsx
    ├── types/
    │   └── restaurant.ts
    ├── App.tsx
    ├── index.css
    └── main.tsx
```

---

## 🧩 Arquitectura Implementada

El proyecto se dividió en responsabilidades técnicas para facilitar el trabajo colaborativo.

### 1. Arquitectura Base y Enrutamiento

Se configuró el punto de entrada de la aplicación y el proveedor global de TanStack Query.

Archivo principal:

```text
src/main.tsx
```

En este archivo se instancia `QueryClient` y se envuelve la aplicación con:

```tsx
<QueryClientProvider client={queryClient}>
  <App />
</QueryClientProvider>
```

También se configuró el enrutamiento principal en:

```text
src/App.tsx
```

Rutas implementadas:

```tsx
<Route path="/" element={<HomePage />} />
<Route path="/reserva/:id" element={<ReservationPage />} />
<Route path="*" element={<Navigate to="/" replace />} />
```

---

### 2. Lógica de Datos y Consumo de API

La conexión con el backend se implementó en la carpeta:

```text
src/api/
```

Archivo principal:

```text
src/api/restaurantApi.ts
```

Este archivo contiene la función encargada de consultar una reserva desde la API REST:

```tsx
fetchReservationDetail(id)
```

La URL base local utilizada para el consumo de reservas es:

```text
http://127.0.0.1:8000/api/reservations/
```

---

### 3. Modelado de Datos con TypeScript

Los contratos de datos se definieron en:

```text
src/types/restaurant.ts
```

Interfaces principales:

- `Customer`
- `Table`
- `Reservation`
- `ReservationResponse`

Estas interfaces permiten trabajar con tipado estricto y facilitan el autocompletado y la validación en tiempo de desarrollo.

---

### 4. Custom Hook con TanStack Query

La lógica asíncrona fue centralizada en:

```text
src/hooks/useReservation.ts
```

Este hook utiliza `useQuery` para consultar los datos de una reserva:

```tsx
useQuery({
  queryKey: ['reservation-detail', reservationId],
  queryFn: () => fetchReservationDetail(reservationId),
  enabled: Boolean(reservationId),
  staleTime: 1000 * 60 * 5,
})
```

Ventajas aplicadas:

- Caché automática.
- Manejo de estados de carga.
- Manejo de errores.
- Evita peticiones innecesarias.
- Separa la lógica de datos de la interfaz visual.

---

### 5. Interfaz de Usuario y Maquetación

La interfaz se implementó mediante componentes reutilizables.

Componentes principales:

```text
src/components/RestaurantHeader.tsx
src/components/ReservationSearch.tsx
src/components/ReservationView.tsx
```

Vistas principales:

```text
src/pages/HomePage.tsx
src/pages/ReservationPage.tsx
```

La vista inicial permite ingresar el ID de una reserva. Luego, mediante React Router, se redirige a la ruta dinámica:

```text
/reserva/:id
```

Finalmente, `ReservationView` renderiza el comprobante de reserva con la información recibida desde el backend.

---

## 🖥️ Funcionamiento de la Aplicación

### Página principal

Ruta:

```text
/
```

Funcionalidad:

- Muestra el buscador de reservas.
- Permite ingresar el ID de una reserva.
- Redirige a la vista dinámica del comprobante.

### Vista de reserva

Ruta:

```text
/reserva/:id
```

Funcionalidad:

- Obtiene el parámetro `id` desde la URL.
- Ejecuta el hook `useReservation`.
- Muestra estados de carga y error.
- Renderiza el comprobante si la reserva existe.

### Comprobante de reserva

El comprobante muestra:

- Nombre del cliente.
- Correo electrónico.
- Teléfono.
- ID de reserva.
- Número de mesa.
- Capacidad de la mesa.
- Fecha y hora de la reserva.
- Cantidad de comensales.
- Estado de la reserva.

---

## ⚙️ Instrucciones de Instalación y Ejecución Local

Para probar correctamente el proyecto se deben ejecutar el backend y el frontend en terminales separadas.

---

## 1. Levantar el Backend

Ubicarse en la carpeta del backend:

```bash
cd Laboratorio10/backend
```

Crear entorno virtual:

```bash
python -m venv venv
```

Activar entorno virtual.

En GNU/Linux o macOS:

```bash
source venv/bin/activate
```

En Windows con Git Bash:

```bash
source venv/Scripts/activate
```

En Windows con PowerShell:

```powershell
venv\Scripts\Activate.ps1
```

Instalar dependencias:

```bash
pip install -r requirements.txt
```

Aplicar migraciones:

```bash
python manage.py migrate
```

Ejecutar servidor Django:

```bash
python manage.py runserver
```

Verificar que la API esté disponible en:

```text
http://127.0.0.1:8000/api/reservations/
```

Nota: el archivo `requirements.txt` del backend utiliza Django 6.0.5, por lo que se recomienda usar Python 3.12 o superior para evitar errores de compatibilidad.

---

## 2. Levantar el Frontend

En una nueva terminal, ubicarse en la carpeta del frontend:

```bash
cd Laboratorio10/frontend
```

Instalar dependencias:

```bash
npm install
```

Ejecutar servidor de desarrollo:

```bash
npm run dev
```

Abrir en el navegador la URL indicada por Vite, normalmente:

```text
http://localhost:5173/
```

---

## 🧪 Prueba Funcional

Para verificar que la integración funciona correctamente:

1. Levantar el backend con Django.
2. Verificar que la API responda en:

```text
http://127.0.0.1:8000/api/reservations/
```

3. Levantar el frontend con Vite.
4. Ingresar a:

```text
http://localhost:5173/
```

5. Escribir el ID de una reserva existente.
6. Presionar el botón de búsqueda.
7. Confirmar que se carga la vista:

```text
/reserva/:id
```

8. Verificar que se muestre el comprobante de reserva con los datos del cliente y de la mesa.

Si la reserva no existe o ocurre un problema con la API, la aplicación muestra un mensaje de error y permite volver al buscador.

---

## 🔁 Flujo de Datos

El flujo general de la aplicación es:

```text
HomePage
   ↓
ReservationSearch
   ↓
React Router navega a /reserva/:id
   ↓
ReservationPage obtiene el parámetro id
   ↓
useReservation ejecuta TanStack Query
   ↓
fetchReservationDetail consulta la API REST
   ↓
ReservationView muestra el comprobante
```

---

## 🚀 Build de Producción

Para generar la versión optimizada del frontend:

```bash
cd Laboratorio10/frontend
npm run build
```

Para previsualizar el resultado del build:

```bash
npm run preview
```

El resultado de producción se genera en la carpeta:

```text
dist/
```

---

## ☁️ Despliegue

El proyecto puede desplegarse utilizando Vercel o Netlify.

### Frontend en Vercel

1. Ingresar a Vercel.
2. Importar el repositorio desde GitHub.
3. Seleccionar el frontend como directorio raíz del proyecto.
4. Verificar que el framework detectado sea Vite.
5. Ejecutar el despliegue.

### Backend en Render

Para el backend Django se puede utilizar Render como servicio de despliegue.

Configuración general:

```text
Build Command:
pip install -r requirements.txt && python manage.py collectstatic --noinput
```

```text
Start Command:
gunicorn MyDjangoProject.wsgi:application
```

Si se despliega el backend en producción, se debe actualizar la URL base usada por el frontend para que apunte a la API pública correspondiente.

---

## 📌 Consideraciones

- El backend debe estar ejecutándose antes de probar el frontend.
- El frontend consume la API local en `http://127.0.0.1:8000/api/reservations/`.
- Para producción, la URL de la API debe cambiarse por la URL pública del backend.
- No se debe subir la carpeta `node_modules/` al repositorio.
- El frontend usa Vite, por lo que las variables de entorno deben iniciar con el prefijo `VITE_` si se requiere configurar una URL externa.

---

## 📊 Resultados Obtenidos

Durante el laboratorio se verificó:

- Creación de una SPA con React, Vite y TypeScript.
- Configuración de rutas con React Router.
- Consumo de API REST mediante `fetch`.
- Implementación de un hook personalizado con TanStack Query.
- Manejo de estados `isLoading` e `isError`.
- Renderizado de datos provenientes del backend.
- Implementación de componentes reutilizables.
- Diseño visual de un comprobante de reserva.
- Separación de responsabilidades entre tipos, API, hooks, componentes y páginas.

---

## 📚 Referencias y Bibliografía

- React Documentation. https://react.dev/
- Vite Documentation. https://vite.dev/
- TanStack Query Documentation. https://tanstack.com/query/latest
- React Router Documentation. https://reactrouter.com/
- Django REST Framework. https://www.django-rest-framework.org/
- django-cors-headers. https://pypi.org/project/django-cors-headers/
- Vercel Documentation. https://vercel.com/docs
- Render Documentation. https://render.com/docs

---

*© 2026 - Escuela Profesional de Ingeniería de Sistemas - UNSA*