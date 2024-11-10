# Usamos una imagen base de Nginx
FROM nginx:alpine

# Copiar los archivos del proyecto al contenedor
COPY . /usr/share/nginx/html

# Exponer el puerto 80 para el servidor web
EXPOSE 80
