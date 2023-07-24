const traerProductos = async () => {
    const productos = await fetchApi('listar-productos', 'get');
    return productos;
}

const renderProductos = async () => {
    const tabla = document.getElementById('tabla');
    const productos = await traerProductos();
    let html = `<thead>
        <tr>
        <th>Nombres <i class="bi bi-chevron-expand"></i></th>
        <th>Referencias <i class="bi bi-chevron-expand"></i></th>
        <th>Categoría <i class="bi bi-chevron-expand"></i></th>
        <th>Cantidad <i class="bi bi-chevron-expand"></i></th>
        <th>Precio <i class="bi bi-chevron-expand"></i></th>
        <th>Operaciones <i class="bi bi-chevron-expand"></i></th>
        </tr>
    </thead>`;

    if (productos) {
        html += '<tbody>';
        productos.forEach(producto => {
            html += `<tr>
            <td>${producto.nombres}</td>
            <td>${producto.referencias}</td>
            <td>${producto.categoria}</td>
            <td>${producto.cantidad}</td>
            <td>${producto.valor}</td>
            <td>
                <i class="bi bi-pencil-square" id="icons"></i>
                <i class="bi bi-trash" id="icons"></i>
            </td>
        </tr>`;
        });
        html += '</tbody>';
        tabla.textContent = '';
        tabla.innerHTML = html;
    }

}

renderProductos();