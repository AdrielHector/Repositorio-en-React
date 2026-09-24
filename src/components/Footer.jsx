const Footer = ({ autor, anio }) => {
  return (
    <footer>
      <h1>Contacto</h1>
      <ul>
        <li><a href="https://github.com/AdrielHector" target="_blank" rel="noopener noreferrer">GitHub</a></li>
        <li>Telefono: 3815990170</li>
        <li>Email: adru4379@gmail.com</li>
      </ul>
      <p>Hecho por {autor} © {anio}</p>
    </footer>
  );
};

export default Footer;