

const Alumno = (props) => {

 
  return (
    <div>
{props.alumnos.map((alumno) => (
  <li key= {alumno.nombre}>
   Alumno: {alumno.nombre} Edad: {alumno.edad} Nota: {alumno.nota}
  </li>
)
  )
}
  
 </div>)}

export default Alumno;