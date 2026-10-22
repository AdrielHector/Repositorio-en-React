import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Proyectos from './pages/Proyectos'
import Contact from './pages/Contact'
import Practicas from './pages/Practicas'
import Sidebar from './components/Sidebar'
function App() {
  return (
    <div className='layout'>
      <Sidebar/>
      <main className='contenido'>
    <Routes>  
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/projects" element={<Proyectos />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/practices" element={<Practicas />} />
    </Routes>
    </main>
    </div>
  )
}

export default App