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
        <li><a href="#inicio">inicio</a></li>
        <li><a href="#experiencia">experiencia</a></li>
        <li><a href="#proyectos">proyectos</a></li>
        <li><a href="#habilidades">habilidades</a></li>
      </ul>
    </header>
  );
};

export default Header;