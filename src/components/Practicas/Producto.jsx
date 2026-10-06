   

const Producto = (props) => {
  return (
    <div>Productos
      <ul>{props.productos.map((producto) =>
    <li key= {producto.id}>
      Producto: {producto.nombre}   
       ${producto.precio}
    </li>
    )}
     </ul>
    </div>
    
    )
}

export default Producto