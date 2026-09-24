const experiencias = [
  {
    id: 1,
    puesto: "Emprendimiento impresion 3D",
    periodo: "2024 – presente",
    descripcion: "",
  },
  {
    id: 2,
    puesto: "Ayudante de soporte técnico",
    periodo: "2022 – 2023",
    descripcion:
      "Asistencia técnica a usuarios, instalación de sistemas y mantenimiento de equipos.",
  },
  {
    id: 3,
    puesto: "Proyectos personales",
    periodo: "actualidad",
    descripcion:
      "Desarrollo de aplicaciones de seguimiento y control de personal y stock",
  },
];

const Experience = () => {
  return (
    <section id="experiencia">
      <h2>Experiencia laboral</h2>
      {experiencias.map((exp) => (
        <div key={exp.id}>
          <h4>{exp.puesto}</h4>
          <p>{exp.periodo}</p>
          <p>{exp.descripcion}</p>
        </div>
      ))}
    </section>
  );
};

export default Experience;