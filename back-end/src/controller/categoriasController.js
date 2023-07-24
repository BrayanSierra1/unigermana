const Categorias = require('../model/categorias');

class CategoriasController {
    constructor() {
        this.categorias = new Categorias();
    }

    crearCategoria(body, respuesta) {
        this.categorias.crear(body, (error, resultado) => {
            if (error) {
                respuesta.json({ error: 'Error al crear categoría, intenta de nuevo' })
                return;
            }
            const filasAfectadas = resultado.affectedRows > 0;
            respuesta.json({ categoriaCreada: filasAfectadas })
        })
    }

    listarCategorias(respuesta) {
        this.categorias.seleccionar((error, resultado) => {
            if (error) {
                respuesta.json({ error: 'Error al traer categorias' });
                return;
            }
            respuesta.json(resultado);
        });
    }

    actualizarCategoria(body, respuesta) {
        this.categorias.actualizar(body, (error, resultado) => {
            if (error) {
                respuesta.json({ error: 'Error al actualizar categoría, intenta de nuevo' })
                return;
            }
            const filasAfectadas = resultado.affectedRows > 0;
            respuesta.json({ categoriaActulizada: filasAfectadas })
        })
    }

    eliminarCategoria(body, respuesta) {
        this.categorias.eliminar(body, (error, resultado) => {
            if (error) {
                respuesta.json({ error: 'Error al eliminar categoría, intenta de nuevo' })
                return;
            }
            const filasAfectadas = resultado.affectedRows > 0;
            respuesta.json({ categoriaEliminada: filasAfectadas })
        })
    }
}

module.exports = CategoriasController;