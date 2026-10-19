import Contador from "./Contador";
import Listas from "./Listas";
import Producto from "./Producto";
import Saludo from "./Saludo";
import UserCard from "../UserCard";
import Alumno from "./Alumno";
import Tareas from "./Tarea"
import ContadorR from "./ContadorR";
import Colores from "./Colores";
import Carrito from "./Carrito";
import Post from "./Post";
import ContadorUseEffect from "./ContadorUseEffect";
 const Mainpracticas = () => {

const persona =  {
     nombre: "Juan",  apellido: "Perez", profesion: "Ingeniero" 
     }

    const tareas = [
{descripcion: "Hacer la compra", estado: false},
{descripcion: "Lavar la ropa", estado: false},
{descripcion: "Alimentar a los perros", estado: false}
] ;

    const productos = [
  { id: 1, nombre: "Mouse", precio: 15000 },
  { id: 2, nombre: "Teclado", precio: 25000 },
  { id: 3, nombre: "Monitor", precio: 180000 }
];
   const alumnos = [
  { nombre: "Juan", edad: 20, nota: 8.5 },
  { nombre: "María", edad: 22, nota: 9.0 },
  { nombre: "Pedro", edad: 21, nota: 7.5 }
];

  return (
    <div>
  <section id="practicas">
    <h2>Prácticas</h2>
    <div className="practica">
      <h2>Saludo</h2>
      <Saludo nombre={persona.nombre} apellido={persona.apellido} />
    </div>
    <div className="practica">
      <h2>Tarjeta de Usuario</h2>
      <UserCard
        nombre={persona.nombre}
        apellido={persona.apellido}
        profesion={persona.profesion} />
    </div>
    <div className="practica">
      <h2>Contador</h2>
      <Contador />
    </div>
    <div className="practica">
      <h2>Listas</h2>
      <Listas />
    </div>
    <div className="practica">
      <h2>Producto</h2>
      <Producto productos={productos} />
      </div>
      <div className="practica">
     < h2>Alumnos</h2>
  
      <Alumno alumnos={alumnos} />
      </div>
      <div className="practica">
        <h2>Tareas</h2>
        <Tareas tareas={tareas}/>
      </div>
      <div className="practica">
        <h2>Contador con useState</h2>
        <ContadorR inicial={10} />
      </div>
      <div className="practica">
        <h2>Colores</h2>
        <Colores colorinicial="⚪"/>
      </div>
    <div className="practica">
      <h2>Carrito de compras</h2>
      <Carrito productos={productos} />
    </div>
    <div className="practica">
      <h2>Post</h2>
      <Post titulo="Mi primer post" 
      contenido="Este es el contenido de mi primer post" 
      autor="Juan Perez" />
    </div>
      <div className="practica">
      <h2>Contador con useEffect</h2>
      <ContadorUseEffect />
    </div>
    
   
  </section>
  </div>
);
 }
export default Mainpracticas