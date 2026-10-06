import { useState } from "react";

const Tarea = ({ tarea }) => {
  const [completada, setCompletada] = useState(tarea.estado);

  return (
    <li>
      <p>Descripción: {tarea.descripcion}</p>
      Estado: {completada ? "Completada" : " Pendiente"}{" "}
      <button onClick={() => setCompletada(!completada)}>
        {completada ? "🟢" : "🔴"}
      </button>
    </li>
  );
};

const Tareas = ({ tareas }) => (
  <div>
    <ul>
      {tareas.map((tarea) => (
        <Tarea key={tarea.descripcion} tarea={tarea} />
      ))}
    </ul>
  </div>
);

export default Tareas;