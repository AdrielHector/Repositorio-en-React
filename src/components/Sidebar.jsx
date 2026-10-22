import { NavLink } from 'react-router-dom'

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>Mi Portfolio</h2>
      <nav>
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="/about">Sobre mí</NavLink>
        <NavLink to="/skills">Habilidades</NavLink>
        <NavLink to="/projects">Proyectos</NavLink>
        <NavLink to="/practices">Prácticas</NavLink>
        <NavLink to="/contact">Contacto</NavLink>
      </nav>
    </aside>
  )
}

export default Sidebar