"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql = require("mysql");
class MySQL {
    constructor() {
        this.conectado = false;
        console.log('Clase Inicializada');
        this.cnn = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'hvg',
            database: 'node_ts_express',
        });
        this.conectarDB();
    }
    static get instance() {
        // si no existe la instancia la crea
        // si existe la instancia la devuelve
        return this._instance || (this._instance = new this());
    }
    // método para ejecutar consultas
    static ejecutarQuery(query, callback) {
        //  this.cnn cnn' does not exist on type 'typeof MySQL
        // Sucede porque es una propiedad de la clase y no es una propiedad estatica de la clase
        // cnn solo se ocupa si la clase esta inicializada, como es un método estatico puede ser que no este inicializada, entonces no se puede llamar directamente
        this.instance.cnn.query(query, (err, results, fields) => {
            // error al ejecutar query
            if (err) {
                console.log('Error en Query');
                console.log(err);
                return callback(err, null);
            }
            // Cero resultados
            if (results.length === 0) {
                callback('El registro solicitado no existe', null);
            }
            else {
                callback(null, results);
            }
        });
    }
    // Método privado conectarDB que se accederá sola de la clase
    conectarDB() {
        this.cnn.connect((err) => {
            // error al conectar message método de mysqlerror
            if (err) {
                console.log(err.message);
            }
            // Todo bien, cambiar bandera
            this.conectado = true;
            console.log('Base de Datos Online');
        });
    }
}
exports.default = MySQL;
