const ConexionBD = require('../database/connection');

class Elementos {
    constructor() {
        this.cx = new ConexionBD();
    }

    seleccionar(callback) {
        this.cx.conectar();
        this.cx.ejecutar(`SELECT * FROM inventario.elementos`,
            callback
        )
        this.cx.desconectar();
    }

    listarProductos(callback) {
        this.cx.conectar();
        this.cx.ejecutar(`SELECT 
            e.id_categorias id, referencias, nombres, estado, cantidad, valor, c.nombre categoria
        FROM
            inventario.elementos e
            INNER JOIN
            inventario.categorias c ON e.id_categorias = c.id_categorias
            ORDER BY nombres, categoria ASC`,
            callback
        )
        this.cx.desconectar();
    }


    crear(data, callback) {
        this.cx.conectar();
        this.cx.ejecutar(`INSERT INTO elementos
        (id_categorias, referencias, nombres, cantidad, valor, estado, lugar, fecha_reg, hora_reg, observaciones)
        VALUES
        (${data.id}, '${data.referencias}', '${data.nombres}', ${data.cantidad}, ${data.valor}, '${data.estado}', '${data.lugar}', CURDATE(), NOW(), '${data.observaciones}')`,
            callback);
        this.cx.desconectar();
    }

    actualizar(data, callback) {
        this.cx.conectar();
        this.cx.ejecutar(`UPDATE elementos SET referencias = '${data.referencias}', nombres = '${data.nombres}', cantidad = '${data.cantidad}', valor = '${data.valor}', estado = '${data.estado}', lugar = '${data.lugar}', observaciones = '${data.observaciones}') 
        WHERE id_categorias = ${data.id} AND referencias = '${data.referencias}'`,
            callback
        );
        this.cx.desconectar();
    }

    eliminar(data, callback) {
        this.cx.conectar();
        this.cx.ejecutar(`DELETE FROM elementos WHERE id_categorias = ${data.id} AND referencias = '${data.referencias}'`,
            callback
        );
        this.cx.desconectar();
    }
}


module.exports = Elementos