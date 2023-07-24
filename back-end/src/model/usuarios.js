const ConexionBD = require('../database/connection');

class Usuarios {
    constructor() {
        this.cx = new ConexionBD();
    }

    crear(data, callback) {
        this.cx.conectar();
        this.cx.ejecutar(`INSERT INTO usuarios (nombre, usuario, password, email, observaciones) VALUES ('${data.nombre}', '${data.usuario}', '${data.password}', '${data.email}', '${data.observaciones}')`,
            callback
        );
        this.cx.desconectar();
    }

    login(data, callback) {
        this.cx.conectar();
        this.cx.ejecutar(`SELECT COUNT(Id_usuario) as total FROM usuarios WHERE usuario = '${data.usuario}' AND password = '${data.password}'`,
            callback
        );
        this.cx.desconectar();
    }
}

module.exports = Usuarios;