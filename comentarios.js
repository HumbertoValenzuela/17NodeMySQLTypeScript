// 216 Temas puntuales de la seccion
// Esta sección fue creada por solicitud de muchos alumnos, que me pedían usar MySQL en node y también otro grupo de alumnos que me pedían utilizar TypeScript.

// En esta sección puntualmente veremos cosas como:

// Usar TypeScript en proyectos de Node
// Conectar MySQL con Node
// Implementar el patrón singleton para el manejo de una única instancia de clase
// Realizar queries de base de datos
// Crear una pequeña base de datos con su usuario de base de datos y permisos.
// Crear un servidor REST
// Manejo de errores
// Entre otras cosas.
// Espero que esta sección les guste y les sea de mucha utilidad.

// 217 Instalacion necesaria
// Nota importante:
// Esta sección aprenderemos entre otras cosas a trabajar con TypeScript en Node, pero para sacar el máximo provecho a la misma, también enseñaré como conectarse a MySQL desde Node.

// Estos temas me lo han pedido mucho, y por eso lo estoy agregando, pero no enseñare como instalar y configurar MySQL, hay muchas formas de hacerlo, desde la nativa descargando los instaladores como usando gestores como Xampp.

// Pueden usar cualquier método para tener corriendo MySQL en su computadora o en su ambiente de pruebas, yo usaré una versión que tengo ya instalada en mi equipo y el manejador será PHPMyAdmin.

// Les dejo enlaces útiles por si quieren instalar MySQL rápidamente

// Xampp - Gestor automático - Windows - OSX - Linux
// https://www.apachefriends.org/es/index.html
// Mamp - Gestor automático en windows
// http://www.wampserver.com/en/
// MySQL instalador manual - Windows - linux - OSX
// https://dev.mysql.com/downloads/mysql/


// Después de estas clases voy a dar por hecho que ya tienen corriendo MySQL y pueden gestionar su base de datos, yo crearé la base de datos manualmente, el usuario y las conexiones aquí, pero la instalación de MySQL no la haré.

// 218 Inicio de proyecto - TypeScript-MySQL
// npm init
// Instalando TypeScript 
// -g instalar con permiso de administrador. de forma global
// npm install -g typescript 
// Verificiando que se instaló correctamente
// tsc(typescript compiler)
// tsc --version
// TypeScript: JavaScript con tipado estático 
// carpeta src - REST Server server express, se mostrarán las funcionalidades pero usando typeScript
// mysql - se agregarán las clases para trabajar con mysql
// public - carpeta para los archivos estáticos html
// router - rutas de express
// server - código relacionado al servidor de express
// index.ts - archivo de inicio - se usará cada vez que se inicie la aplicación de node
// TypeScript: Los archivos terminan con .ts
// existen paquetes como ts-node que permite ejecutar código directo en node.
// Pero acá se ocupa .ts y convertirlo a su igual en javascript.
// TypeScript establecer reglas, creando archivo de configuración
// tsc --init
// se crea un archivo llamado tsconfig.json
// Tiene una configuración por defecto, pero se puede modificar
// Describiendo algunas reglas
// "module": "commonjs", es el importador de modulos de node
// "target": "es6", es el tipo de código que se generará
// "outDir": "./dist", es la carpeta donde se generará el código. producto final
// Convertir el código TypeScript a javascript
// Terminal - tsc esto crea el archivo dist/index.js
// "use strict" es una regla y restricción para código javascript
// Ejecutar el código dist/index.js en node
// Terminal: nodemon dist/index.js
// Cada vez que cambia el archivo de dist (distribución) va a recargar el nodemon)
// No se va a ver porque se tiene que disparar el proceso de compilación. Es posible configurarlo para que se ejecute en cada cambio.
// Ejecutar manualmente el proceso de compilación: terminal - tsc

// 219 Referencia al express basico - hecho en el curso
// Abran el siguiente enlace, los llevará a mi repositorio de GitHub del proyecto de Express-Básico, este me servirá para explicar lo que viene en el siguiente video:

// Sólo necesito que lo abran y continúen en el siguiente video

// https://github.com/Klerith/Express-Basico

// 220 Configurando express en TypeScript
// npm install express --save
// server.ts:
// import express = require('express');
// arrojará un error que no puede encontrar el módulo. TypeScript recomienda instalar Try `npm i @types/express --save-dev`.
// esto sucede porque express esta pensado en javascript, pero con esta instalación se puede usar TypeScript.
// método que será llamado Server.init(), luego dispara el contructor para inicializar
// index.ts: usar la clase y el método Server.init
// tsc
// nodemon dist/index.js
// Navegador - localhost:3000 - cannot get / indica que está coriendo el servidor

// 221 Desplegar el public folder
// Navegador - muestre el - localhost:3000 - /public/index.html
// server.ts: definir path en typeScript
// crear public/index.html
// tsc para compilar
// nodemon dist/index
// Pero la página no se muestra, porque no se encuentra el archivo index.html
// TS solo trabaja con archivos .ts. y no con html
// instalar copyfiles. para que agregue archivos solicitados al realizar build
// https://www.npmjs.com/package/copyfiles
// npm install copyfiles --save-dev
// para usar copyfiles: copyfiles y something/*.js html
// package.json: la dirección comienza en package.json
//  "html": "copyfiles src/public/*.html"
// Luego viene la carpeta de destino
// "html": "copyfiles src/public/*.html dist"
// ejecutar el comando: npm run html
// entonces, dist/src/public/index.html pero copia la carpeta src. esa carpeta no se requiere
// --up para quitar las carpetas no requeridas. 1 indica cuantas carpetas quieres quitar
// "html": "copyfiles --up 1 src/public/*.html dist"
// npm run html
// package.json: "build": "tsc && npm run html"
// terminal - npm run build
// nodemon dist/index
// Navegador - localhost:3000 

// 222 Rutas de nuestra aplicación
// router/router.ts: importar Router, Request, Response
// index.ts: importar Router y usarlo server.app.use(router)
// generar buil: npm run build
// nodemon dist/index
// Navegador - localhost:3000/heroes
// Ruta que recibe un argumento
// router.get('/heroes/:id'
// generar buil: npm run build
// nodemon dist/index
// Navegador - localhost:3000/heroes/1

// 223 Crear base de datos en MySQL
// iniciar Servicio MySQL80
// Crear Schema (BD) con el nombre node_TS_express
// Charset/Collation: utf8 utf8_spanish_ci
// crear tabla heroes - 4 registros
// obtener usuario y contraseña de MySQL

// 224 Paquete para conectarse a MySQL desde Node
// https://github.com/mysqljs/mysql

// 225 Clase para conectarse a MySQL
// npm install mysql --save
// npm install @types/mysql --save-dev
// mysql.ts: patron singleton, para evitar que mi clase se vuelva a crear. En caso de que tenga multiples instancias de la misma.
// crear boiler play - de conexión a MySQL - validaciones de errores de conexión, usuario, contraseña, host.
// Clase Inicializada
// Base de Datos Online
// index.ts: instanciar la clase MySQL base de datos
// terminal: npm run build - nodemon dist/index
// Clase Inicializada
// Servidor corriendo en el puerto 3000
// Base de Datos Online
// Cambiar el password para observar el error
// usuario incorrecto: ER_NOT_SUPPORTED_AUTH_MODE: Client does not support authentication protocol requested by server; consider upgrading MySQL client
// password incorrecto:ER_ACCESS_DENIED_ERROR: Access denied for user 'root'@'localhost' (using password: YES)
// domain: getaddrinfo ENOTFOUND localhos
// database: ER_BAD_DB_ERROR: Unknown database 'node_ts_expres'

// 226 Implementar patron singleton y prevenir multiples instancias de la clase
// get set para manipular la _instance. Es el hecho de controlar las formas cuando se hace referencia a _instance (alguna propiedad de la clase)
//  public static get instance() {
    // si no existe la instancia la crea
    // si existe la instancia la devuelve
    // return this._instance || ( this._instance = new this() );
// }
// index.ts: MySQL.instance
// Si se necesita llamar  MySQL.instance para usar en un sql o query

// 227 Ejecutar queries en las rutas
// ejemplo de query:
// contiene la query, un callback que recibe un error , un resultado y los campos
// connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//     if (error) throw error;
//     console.log('The solution is: ', results[0].solution);
//   });

// https://www.typescriptlang.org/docs/