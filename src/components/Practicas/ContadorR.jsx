import {useState} from 'react'
const ContadorR = ({ inicial }) => {

    const [contador, Setcontador] = useState(inicial);

  return (
    <div>
      <p>Valor: {contador}</p>
      <button onClick={() => Setcontador(contador + 1)}>Sumar</button>
      <button onClick={() => Setcontador(contador - 1)}>Restar</button>
      <br />
      <button onClick={() => Setcontador(inicial)}>Reiniciar</button>
    </div>
  )
}

export default ContadorR