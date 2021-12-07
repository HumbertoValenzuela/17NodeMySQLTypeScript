"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// importar express
const express = require("express");
// no se necesita ningún @types porque path funciona en TS
const path = require("path");
// Clase para manejar el servidor express
class Server {
    constructor(puerto) {
        this.port = puerto;
        this.app = express();
    }
    // método que será llamado Server.init(), luego dispara el contructor para inicializar
    static init(puerto) {
        return new Server(puerto);
    }
    publicFolder() {
        const publicPath = path.resolve(__dirname, '../public');
        this.app.use(express.static(publicPath));
    }
    // método listen para escuchar el puerto y indicar conexión
    start(callback) {
        this.app.listen(this.port, callback());
        this.publicFolder();
    }
}
exports.default = Server;
