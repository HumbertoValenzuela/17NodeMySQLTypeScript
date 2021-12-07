// console.log('Código de Typescript, cambiando');
import MySQL from "./mysql/mysql";
import router from "./router/router";
import Server from "./server/server";

const server = Server.init(3000);
server.app.use( router );

// const mysql = new MySQL();
//MySQL.instance;// solo para probar la instancia

server.start( () => {
  console.log('Servidor corriendo en el puerto 3000');
});
