
<h1>Proyecto de Streaming</h1>

Descripción

Este proyecto es una plataforma de streaming de música y videos en línea, que permite a los usuarios explorar, reproducir y crear listas de reproducción con su contenido favorito.

Características

Reproducción en tiempo real de audio y video.

Sistema de autenticación para gestionar perfiles de usuario.

Creación y gestión de listas de reproducción personalizadas.

Búsqueda avanzada de contenido por título, artista o género.

Interfaz responsiva y amigable para móviles y escritorio.

Tecnologías Utilizadas

Frontend: React, Tailwind CSS

Backend: Node.js, Express.js

Base de Datos: MongoDB

Autenticación: Firebase/Auth0

Streaming: HLS/DASH

Despliegue: Netlify (Frontend), Vercel/Render (Backend)

Instalación y Configuración

Requisitos Previos

Node.js y npm instalados

Base de datos configurada (MongoDB Atlas o local)

Variables de entorno configuradas

Pasos

Clona el repositorio:

git clone https://github.com/tu-usuario/tu-repositorio.git
cd tu-repositorio

Instala las dependencias:

npm install

Crea un archivo .env y configura tus credenciales:

MONGO_URI=tu_conexion_mongo
JWT_SECRET=tu_secreto

Inicia el servidor backend:

npm run server

Inicia el frontend:

npm run dev

Uso

Regístrate o inicia sesión.

Explora el catálogo de contenido.

Reproduce canciones y videos.

Crea listas de reproducción personalizadas.

Contribución

Si deseas contribuir, sigue estos pasos:

Haz un fork del repositorio.

Crea una rama con tu nueva característica (git checkout -b feature/nueva-caracteristica).

Realiza tus cambios y haz commit (git commit -m "Agregada nueva característica").

Sube los cambios (git push origin feature/nueva-caracteristica).

Abre un Pull Request.

Licencia

Este proyecto está bajo la licencia MIT.
