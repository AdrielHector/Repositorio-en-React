import Hero from "./Hero";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";

const Mainhome = ({proyectos}) => {
  return (
    <main>
      <Hero
        saludo="Hola!"
        descripcion="Soy Adriel, estudiante de programación. Me gusta resolver problemas y aprender haciendo.🥱"
      />
      <Experience />
      <Skills/>
      <Projects proyectos= {proyectos} />
    </main>
  );
};

export default Mainhome;