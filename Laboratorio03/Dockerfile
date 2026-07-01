# Usamos imagen oficial de Node (version ligera)
FROM node:18-alpine

# Creamos carpeta de trabajo dentro del contenedor
WORKDIR /app

# Copiamos package.json primero, mejora cache
COPY package*.json ./

# Instalamos dependencias (express)
RUN npm install

# Copiamos todo el proyecto
COPY . .

# Exponemos el puerto 80
EXPOSE 80

# Ejecutamos el servidor index.js
CMD ["node", "index.js"]

