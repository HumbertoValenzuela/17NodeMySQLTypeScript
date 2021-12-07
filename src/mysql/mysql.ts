import mysql = require('mysql');

export default class MySQL {

  // patrón singleton manejar la instancia privada
  // instancia del mismo tipo de la clase
  private static _instance: MySQL;

  // propiedades
  cnn: mysql.Connection;
  conectado: boolean = false;

  constructor() {
    console.log('Clase Inicializada');

    this.cnn = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'hvg',
      database: 'node_ts_express',
    });

    this.conectarDB();

  }

  public static get instance() {
    // si no existe la instancia la crea
    // si existe la instancia la devuelve
    return this._instance || ( this._instance = new this() );
  }
    
  // método para ejecutar consultas
  static ejecutarQuery( query: string, callback: Function ) {

    //  this.cnn cnn' does not exist on type 'typeof MySQL
    // Sucede porque es una propiedad de la clase y no es una propiedad estatica de la clase
    // cnn solo se ocupa si la clase esta inicializada, como es un método estatico puede ser que no este inicializada, entonces no se puede llamar directamente
    this.instance.cnn.query( query, ( err, results: Object[], fields ) => {

      // error al ejecutar query
      if ( err ) {
        console.log('Error en Query');
        console.log( err );
        
        return callback( err, null );
      } 

      // Cero resultados
      if ( results.length === 0) {
        callback('El registro solicitado no existe', null);
      } else {
        callback( null, results );
      }

    });
  }
  

  // Método privado conectarDB que se accederá sola de la clase
  private conectarDB() {

    this.cnn.connect( ( err: mysql.MysqlError ) => {

      // error al conectar message método de mysqlerror
      if ( err ) {
        console.log( err.message );
      }

      // Todo bien, cambiar bandera
      this.conectado = true;
      console.log('Base de Datos Online');
    });
    
  }

}