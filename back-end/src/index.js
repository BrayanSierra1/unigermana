const express = require('express');
const cors = require('cors');
const app = express();

const UsuariosController = require('./controller/usuarioController');
const usuario = new UsuariosController();

const CategoriasController = require('./controller/categoriasController');
const categoria = new CategoriasController();

const ElementosController = require('./controller/elementosController');
const elemento = new ElementosController();

app.use(express.json());
app.use(cors());

app.listen(3000, () => {
    console.log('Servidor arriba en puerto 3000')
});

/* API Usuarios */
app.post('/login', (req, respuesta) => {
    usuario.login(req.body, respuesta);
});

app.post('/crear-usuario', (req, respuesta) => {
    usuario.crearUsuario(req.body, respuesta);
});

/* API categorias */
app.get('/listar-categorias', (req, respuesta) => {
    categoria.listarCategorias(respuesta);
});

app.post('/crear-categoria', (req, respuesta) => {
    categoria.crearCategoria(req.body, respuesta);
});

app.put('/actualizar-categoria', (req, respuesta) => {
    categoria.actualizarCategoria(req.body, respuesta);
});

app.delete('/eliminar-categoria', (req, respuesta) => {
    categoria.eliminarCategoria(req.body, respuesta);
});

/* API Elementos */
app.get('/listar-elementos', (req, respuesta) => {
    elemento.listarElementos(respuesta);
})

app.get('/listar-productos', (req, respuesta) => {
    elemento.listarProductos(respuesta);
})

app.post('/crear-elemento', (req, respuesta) =>{
    elemento.crearElementos(req.body, respuesta);
})

app.put('/actualizar-elemento', (req, respuesta) => {
    elemento.actualizarElementos(req.body, respuesta);
})

app.delete('/eliminar-elemento', (req, respuesta) => {
    elemento.eliminarElementos(req.body, respuesta);
})