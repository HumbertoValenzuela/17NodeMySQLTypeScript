// importar express
import express = require('express');
// no se necesita ningún @types porque path funciona en TS
import path = require('path');

// Clase para manejar el servidor express
export default class Server {

  // Propiedades de la clase
  public app: express.Application;
  public port: number;

  constructor( puerto: number) {
    this.port = puerto;
    this.app = express();
  }

  // método que será llamado Server.init(), luego dispara el contructor para inicializar
  static init( puerto: number ) {
    return new Server( puerto );
  }

  private publicFolder() {
    const publicPath = path.resolve(__dirname, '../public');
    this.app.use( express.static( publicPath ) );
  }

  // método listen para escuchar el puerto y indicar conexión
  start( callback: Function ) {
    this.app.listen( this.port, callback() );
    this.publicFolder();
  }

}