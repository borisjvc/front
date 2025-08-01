# Etapa de construcción
FROM node:18-alpine as builder

# Crear directorio de la aplicación
WORKDIR /app

# Copiar archivos de configuración de dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm ci

# Copiar el código fuente
COPY . .

# Argumento para la URL de la API
ARG VITE_API_URL
ENV VITE_API_URL=$VITE_API_URL

# Construir la aplicación para producción
RUN npm run build

# Exponer el puerto
EXPOSE 3131

# Variables de entorno
ENV NODE_ENV=production

# Comando para ejecutar la aplicación
CMD ["serve", "-s", "dist"]