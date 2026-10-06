import ProjectCard from "./Projectcard";

const proyectos = [
  {
    id: 1,
    titulo: "Portafolio personal",
    descripcion: "Este mismo sitio, hecho desde cero para practicar HTML y CSS.",
  },
  {
    id: 2,
    titulo: "Sistemas basicos",
    descripcion: "Sistemas basicos de compra venta y contraseñas en c#",
  },
  {
    id: 3,
    titulo: "Base de datos",
    descripcion: "Base de datos SQL para producto, cliente y personal",
  },
];

const Projects = () => {
  return (
    <section id="proyectos">
      <h2>Proyectos</h2>
      {proyectos.map((proyecto) => (
        <ProjectCard
          key={proyecto.id}
          titulo={proyecto.titulo}
          descripcion={proyecto.descripcion}
        />
      ))}
    </section>
  );
};

export default Projects;