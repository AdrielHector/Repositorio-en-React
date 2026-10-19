import {useEffect,useState} from "react"

const ContadorUseEffect = () => {
  const [contador,setContador] = useState (0);


useEffect(() => {
    console.log(`El contador cambio a : ${contador}`);
},[contador]);

  return (
    <div>
      <p> Contador: {contador}</p>
      <button onClick ={() => setContador(contador + 1)}> sumar</button>
    </div>
  )
}

export default ContadorUseEffect