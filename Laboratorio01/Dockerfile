FROM ubuntu:24.04

ENV DEBIAN_FRONTEND=noninteractive

# Instalar Apache
RUN apt-get update && apt-get install -y apache2

# Crear directorios
RUN mkdir -p /var/www/developers
RUN mkdir -p /var/www/webapp

# Copiar contenido
COPY developers/ /var/www/developers/
COPY webapp/ /var/www/webapp/

# Copiar configuración
COPY apache/sites/developers.conf /etc/apache2/sites-available/
COPY apache/sites/webapp.conf /etc/apache2/sites-available/

# Activar sitios
RUN a2dissite 000-default.conf
RUN a2ensite developers.conf
RUN a2ensite webapp.conf

# Exponer puerto
EXPOSE 80

# Iniciar Apache
CMD ["apachectl", "-D", "FOREGROUND"]