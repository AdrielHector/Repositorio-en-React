const Header = ({ nombre, apellido, profesion, especializacion }) => {
  return (
    <header>
      <div>
        <h2>
          {nombre} <span>{apellido}</span>
        </h2>
        <h3>{profesion}</h3>
        <p>{especializacion}</p>
      </div>
      <ul>
        <li><a href="#inicio">Inicio</a></li>
        <li><a href="#experiencia">Experiencia</a></li>
        <li><a href="#proyectos">Proyectos</a></li>
        <li><a href="#habilidades">Habilidades</a></li>
      </ul>
    </header>
  );
};

export default Header;