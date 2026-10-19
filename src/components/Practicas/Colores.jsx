import {useState} from 'react'

const Colores = ({colorinicial}) => {
    const [seleccion, setSeleccion] =useState(colorinicial || "⚪");

  return (

    <div> 
    <p>El color seleccionado es: {seleccion}</p>
    <button onClick={() => setSeleccion("🟢") }> Verde </button>
    <button onClick ={() => setSeleccion("🔴") }> Rojo </button>
    <button onClick ={() => setSeleccion("🔵") }> Azul </button>
    <br />
    <button onClick ={() => setSeleccion("⚪") }> Reiniciar</button>

    </div>
  )
}

export default Colores