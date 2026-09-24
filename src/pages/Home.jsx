import Header from "../components/Header" 
import Mainhome from "../components/Mainhome";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div >
      <Header
        nombre="Adriel"
        apellido="Hector"
        profesion="Estudiante de programacion"
        especializacion="Resolucion de problemas"
      />
      <Mainhome />
<Footer autor="Adriel Hector" anio={2026} />    
</div>
  );
};

export default Home;