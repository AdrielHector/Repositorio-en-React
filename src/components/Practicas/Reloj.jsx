import {useState, useEffect} from 'react'

const Reloj = () => {

    const [hora, setHora] = useState((new Date));
    const [mostrar, setMostrar] = useState(false);

    useEffect (() => {
          console.log("Reloj detenido");
        const id = setInterval (() =>{
            setHora(new Date())
        }, 1000)


    

return () => clearInterval(id) 
  }, []);

  return (
    <div>
           {mostrar &&( 
        <p>Fecha : {hora.toLocaleDateString()}
         <br />
         Hora {hora.toLocaleTimeString()} 
         </p> )}
          <button onClick={() => setMostrar(!mostrar)}>
        {mostrar ? "Ocultar Reloj" : "Mostrar Reloj"}
      </button>


    </div>
  )
}

export default Reloj