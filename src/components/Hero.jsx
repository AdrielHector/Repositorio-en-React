import foto from "../assets/homero.jpg";
const Hero = ({ saludo, descripcion }) => {
  return (
  <div> <section id="inicio">
      <div>
        <h1>{saludo}</h1>
        <p>{descripcion}</p>
        <a href="#proyectos">Ver mis proyectos</a>
      </div>
      <div>
        <img src={foto} alt="Foto de perfil" />
      </div>
    </section>
    </div>
  );
};

export default Hero;