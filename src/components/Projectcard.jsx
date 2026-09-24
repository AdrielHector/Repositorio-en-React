import { useState } from "react";

const ProjectCard = ({ titulo, descripcion }) => {
  const [abierto, setAbierto] = useState(false);

  return (
    <div>
      <h4>{titulo}</h4>
      {abierto && <p>{descripcion}</p>}
      <button onClick={() => setAbierto(!abierto)}>
        {abierto ? "Ver menos" : "Ver más"}
      </button>
    </div>
  );
};

export default ProjectCard;