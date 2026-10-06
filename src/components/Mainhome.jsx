import Hero from "./Hero";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";
import Mainpracticas from "./Practicas/Mainpracticas";
const Mainhome = ({proyectos}) => {
   
  return (
    <div>
      <Hero
        saludo="Hola!"
        descripcion="Soy Adriel, estudiante de programación. Me gusta resolver problemas y aprender haciendo.🥱"
      />
      <Experience />
      <Skills/>
      <Projects proyectos= {proyectos} />
      <Mainpracticas/>
      
    </div>

  );
};

export default Mainhome;