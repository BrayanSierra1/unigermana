const mysql = require('mysql2')

class ConexionBD {
    conectar() {
        this.conexion = mysql.createConnection({
            host : '127.0.0.1',
            port: 3306,
            database : 'inventario',
            user : 'root',
            password : 'admin123',
        });
        this.conexion.connect(error => {
            if (error) {
                console.error('Error de conexion: ' + error.stack);
                return;
            }
            console.log('Conectado con el identificador ' + this.conexion.threadId);
        });
    }

    ejecutar(query, respuesta) {
        this.conexion.query(query, respuesta);
    }

    desconectar() {
        this.conexion.end();
    }
}



module.exports = ConexionBD;
