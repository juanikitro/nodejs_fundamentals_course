# NOTAS

# Que es NodeJS?

-   Entorno de ejecucion de JavaScript fuera del navegador.
-   Posibilidad de ejecucion en cualquier lado, orientado a servidores.
-   Monohilo con entradas y salidas asincronas.
-   Funciona en base a modulos.
-   Orientado a eventos.

# Que es el event loop?

-   Proceso en bucle que gestiona de forma asincrona todos los eventos del sistema.

### Como funciona?

-   Entrada de eventos, request o functions al **event queue**.
-   Si puede resolverlo rapidamente, lo hace, si no lo envia al **thread pool**.
-   En el thread pool se ejecutan los procesos **asincronicamente** para no frenar el event loop.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f353e06a-ac0a-46b0-9694-9a79206136eb/Untitled.png)

# Que son las variables de entorno?

Variables externas que usamos en nuestros eventos.

### Como declaro una variable de entorno?

```jsx
let envVariable = process.env.ENVVARIABLE || 'doesnt exist'; // La variable tiene que ser declarada, si no sera: 'doesnt exist'
```

### Como uso la variable de entorno?

```bash
ENVVARIABLE='our variable' node file.js
```

# Que es Nodemon?

Herramienta para **desarrollo** que nos permite ejecutar permanentemente nuestro archivo y reiniciar automaticamente al detectar cambios

# Que es PM2?

Herramienta para **produccion** que nos permite ejecutar permanente y en distinta sincronia nuestro archivo y ver asi metricas y logs importantes

# Como podemos manejar el callback hell?

## Funcion recursiva

-   Funcion que se llama a si misma las veces que sea necesario
-   Podemos usar una variable “times” que se vaya restando por cada vez que se ejecuta la funcion (—times)
-   if times > 0 ejecuta la funcion entonces resta 1 a la variable

## Promesas

-   Funciones anidadas mediante el uso de “new Promise( ){ }”, rejects y resolves (retornando variables que se usaran en funciones que continuan
-   Dependencia de las ultimas funciones con las primeras
-   Manejo de errores con “catch( ){ }”

### Async & Await

# Comandos

```bash
node {file_name} # Ejecutar el archivo
nodemon {file_name} # Ejecutar el archivo con nodemon
```
