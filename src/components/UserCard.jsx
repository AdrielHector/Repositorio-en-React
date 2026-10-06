

const UserCard = (props) => {
  return (
    <div>Usuario:
        <p>Nombre: {props.nombre} </p>
        <p>Apellido: {props.apellido} </p>
        <p>Profesión: {props.profesion} </p>
    </div>
  )
}

export default UserCard