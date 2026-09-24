import Hero from "./Hero";
import Experience from "./Experience";
import Projects from "./Projects";
const Mainhome = ({proyectos}) => {
  return (
    <main>
      <Hero
        saludo="hola!"
        descripcion="Soy Adriel, estudiante de programación. Me gusta resolver problemas y aprender haciendo."
      />
      <Experience />
      <Projects proyectos= {proyectos} />
    </main>
  );
};

export default Mainhome;