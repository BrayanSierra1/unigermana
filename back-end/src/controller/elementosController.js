const Elementos = require('../model/elementos');

class ElementosController {
    constructor(){
        this.elementos = new Elementos();
    }

    crearElementos(body, respuesta){
        this.elementos.crear(body, (error, resultado) => {
            if (error){
                respuesta.json({error: 'error al crear elemento, intenta de nuevo'})
                return
            }
            const filasAfectadas = resultado.affectRows > 0;
            respuesta.json({elementoCreado: filasAfectadas})
        })
    }

    listarElementos(respuesta){
        this.elementos.seleccionar((error, resultado) => {
            if(error){
                respuesta.json({error: 'error al traer elementos'});
                return
            }
            respuesta.json(resultado)
        })
    }

    listarProductos(respuesta){
        this.elementos.listarProductos((error, resultado) => {
            if(error){
                respuesta.json({error: 'error al traer elementos'});
                return
            }
            respuesta.json(resultado)
        })
    }

    actualizarElemento(body, respuesta){
        this.elementos.actualizar(body, (error, resultado) => {
            if(error){
                respuesta.json({error: 'error al actualizar elemento'})
                return
            }
            const filasAfectadas = resultado.affectRows > 0;
            respuesta.json({elementoActualizado: filasAfectadas})
        })
    }

    eliminarElemento(body, respuesta) {
        this.categorias.eliminar(body, (error, resultado) => {
            if (error) {
                respuesta.json({ error: 'Error al eliminar elemento, intenta de nuevo' })
                return;
            }
            const filasAfectadas = resultado.affectedRows > 0;
            respuesta.json({ elementoEliminado: filasAfectadas })
        })
    }
}

module.exports = ElementosController;