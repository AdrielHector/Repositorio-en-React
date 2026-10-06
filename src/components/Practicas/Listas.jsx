
const Listas = () => {

    const nombres = ['Juan', 'María', 'Pedro', 'Lucia'];

    

  return (
    <div>
      <h3>Listas de nombres</h3>
      <ul>
        {nombres.map(nombres =>
            <li>{nombres}</li>
        )}
        </ul>

    </div>
  )
}

export default Listas