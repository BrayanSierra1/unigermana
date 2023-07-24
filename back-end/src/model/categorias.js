const ConexionBD = require("../database/connection")

class Categorias {
    constructor() {
        this.cx = new ConexionBD();
    }


    seleccionar(callback) {
        this.cx.conectar();
        this.cx.ejecutar(`SELECT * FROM inventario.categorias`,
            callback
        )
        this.cx.desconectar();
    }

    crear(data, callback){
        this.cx.conectar();
        this.cx.ejecutar(`INSERT INTO categorias
            (codigo, nombre, descripcion, observacion)
            VALUES
            (${data.codigo}, ${data.nombre}, ${data.descripcion}, ${data.observacion})`,
            callback);
        this.cx.desconectar();
    }

    actualizar(data, callback) {
        this.cx.conectar();
        this.cx.ejecutar(`UPDATE categorias SET codigo = '${data.codigo}', nombre = '${data.nombre}', descripcion = '${data.descripcion}', observacion = '${data.observacion}' 
        WHERE id_categorias = ${data.id}`,
        callback  
        );
        this.cx.desconectar();
    }

    eliminar(data, callback) {
        this.cx.conectar();
        this.cx.ejecutar(`DELETE FROM categorias WHERE id_categorias = ${data.id}`,
        callback  
        );
        this.cx.desconectar();
    }
}

module.exports=Categorias