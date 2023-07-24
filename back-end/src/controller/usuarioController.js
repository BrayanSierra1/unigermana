const Usuarios = require('../model/usuarios');

class UsuariosController {
    constructor() {
        this.usuario = new Usuarios();
    }

    crearUsuario(body, respuesta) {
        this.usuario.crear(body, (error, resultado) => {
            if (error) {
                respuesta.json({ error: 'Error al crear usuario, intenta con otro usuario' })
                return;
            }
            const filasAfectadas = resultado.affectedRows > 0;
            respuesta.json({ usuarioCreado: filasAfectadas })
        })
    }

    login(body, respuesta) {
        this.usuario.login(body, (error, resultado) => {
            if (error) {
                respuesta.json({ error: 'Error al hacer login' });
                return;
            }
            const [elemento] = resultado;
            respuesta.json(elemento);
        });
    }
}

module.exports = UsuariosController;