import {useState} from "react"

const Carrito = ({productos }) => {

    const [añadir, setAñadir] = useState([]);

  return (
    <div>
<ul>
    {productos.map(producto => (
        <li key ={producto.id}>
            {producto.nombre} - ${producto.precio} {""}
            <button onClick={() => setAñadir([...añadir, producto])}>Añadir al carrito</button>
        </li>
    ))}
</ul>
<p>Carrito de compras: {añadir.length} items</p>
    </div>
  )
}

export default Carrito