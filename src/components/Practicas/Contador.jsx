import {useState} from "react"

const Contador = () => {


const [contador,setContador] = useState(0);
const [mostrar, setMostrar] = useState(true);
const [nombre,setNombre] = useState("")
const [saludo,setSaludo] = useState("")

const handleChange = (e) => {

    setNombre(e.target.value)
}
const handleClick = () => {
    setSaludo(nombre)
    setNombre("")
}

  return (
    <div> Contador {contador} {" "}
        <button onClick={ ()=> setContador (contador + 1)}> Sumar   </button>
        <button onClick= { () => setContador (contador - 1)}> Restar
        </button>
        <br  /><br /><br />
        <h2>Mostrar/ocultar parrafo</h2>
        {mostrar && <p>soy un parrafo </p>}
        <button onClick={() => setMostrar (!mostrar)}>
                {mostrar ? "hola" : "chau"}
        </button>
<br /><br /><br />
<h2>Saludo</h2>
<p>Ingrese su nombre:</p>
 <input type="text"
 onChange={handleChange} 
 />
 <button onClick={handleClick} 
 > enviar </button>
 {saludo && <p>hola {saludo} </p>}
    </div>

  )
}

export default Contador