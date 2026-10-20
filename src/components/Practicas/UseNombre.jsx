import {useState, useEffect} from 'react'

const UseNombre = () => {
    const [nombre, setNombre] = useState("");

useEffect(() => {
    console.log(`Hola ${nombre}`)
document.title = `Hola ${nombre}`}, [nombre]);
return (
    <div>
        <input type ="text"
         value={nombre}
          onChange={(e) => setNombre(e.target.value)} />
        <p>Hola {nombre} Observa la consola!</p>
    </div>
)
}


export default UseNombre