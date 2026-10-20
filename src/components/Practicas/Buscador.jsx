import {useState} from "react"


const Buscador = ({productos}) => {

const [busqueda,setBusqueda] = useState ("");

const handleChange = (e) =>{ 

    setBusqueda(e.target.value)}

    const filtrados = productos.filter((p) =>
        p.nombre.toLowerCase().includes(busqueda.toLowerCase())
)

  return (

    <div>
        Buscador {" "}
    <input type= "text"
     value={busqueda} 
     onChange={handleChange} ></input>
    <p>Buscando : {busqueda} </p>
     <ul> {filtrados.map (producto =>(
        <li  key={producto.id}>
            {producto.nombre} - {producto.precio}
 </li>
 
    ) )}
    </ul>

    
  


   

    </div>
  )
}

export default Buscador