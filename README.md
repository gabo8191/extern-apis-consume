# Anime and Logos Web Application

## Descripción

Esta aplicación web muestra datos obtenidos de dos APIs externas: una que genera logos aleatorios y otra que devuelve información de un anime aleatorio. El servidor backend, desarrollado con Express, realiza las solicitudes a ambas APIs y combina las respuestas en un solo objeto JSON. El frontend consume la respuesta del backend y presenta los datos de manera visual y organizada utilizando Bootstrap.

## Tecnologías utilizadas

- **Backend**: Node.js con Express
- **Frontend**: HTML, JavaScript y Bootstrap
- **APIs externas**:
  - [Logotypes.dev API](https://logotypes.dev/random/data): Proporciona un logo aleatorio junto con su descripción.
  - [Jikan API (MyAnimeList)](https://api.jikan.moe/v4/random/anime): Devuelve información de un anime aleatorio.

## Instalación y configuración

### Requisitos previos

Para instalar y ejecutar este proyecto localmente, es necesario tener instalados los siguientes componentes:

- [Node.js](https://nodejs.org) (versión 12 o superior)
- [npm](https://www.npmjs.com/get-npm), que se instala junto con Node.js

### Pasos de instalación

1. **Clonar el repositorio**: Se debe clonar este repositorio en la máquina local utilizando el siguiente comando:

   ```bash
   git clone https://github.com/gabo8191/extern-apis-consume.git
   ```

2. **Instalar dependencias**: Navegar a la carpeta del proyecto e instalar las dependencias de Node.js ejecutando:

   ```bash
   cd nombre-del-repositorio
   npm install
   ```

3. **Iniciar el servidor**: Para iniciar el servidor Express en el puerto 3000, ejecutar el siguiente comando:

   ```bash
   npm run dev
   ```

4. **Abrir la aplicación**: Finalmente, abrir el navegador web y navegar a `http://localhost:3000` para visualizar la aplicación.

## Estructura del proyecto

El proyecto está organizado de la siguiente manera:

```plaintext
/public
    /js
        app.js      --> Lógica del frontend para consumir la API y mostrar los datos.
    index.html      --> Interfaz principal de la aplicación.
index.js            --> Servidor Express que consulta las dos APIs y devuelve la respuesta combinada.
package.json        --> Archivo de configuración para el proyecto Node.js.
README.md           --> Documentación del proyecto.
```

## Funcionamiento

1. **Backend (Express)**: El servidor se encarga de realizar una única petición desde el frontend a través del endpoint `/api/datos`.

   - Realiza solicitudes a dos APIs externas:
     - Una para obtener un logo aleatorio.
     - Otra para obtener datos de un anime aleatorio.
   - Combina las respuestas de ambas APIs en un solo objeto JSON y lo envía al frontend.

2. **Frontend (HTML/JS)**: El archivo `app.js` en el frontend se encarga de:
   - Realizar una solicitud al backend en el endpoint `/api/datos`.
   - Recibir y procesar la respuesta que contiene información tanto del logo como del anime.
   - Mostrar los datos obtenidos en el navegador de forma estructurada utilizando tarjetas (`cards`) de Bootstrap para una mejor presentación visual.
