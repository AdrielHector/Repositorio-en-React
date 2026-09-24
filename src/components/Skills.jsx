const habilidades = ["HTML", "CSS", "JavaScript", "C#", "SQL", "Git"];

const Skills = () => {
  return (
    <section id="habilidades">
      <h2>habilidades</h2>
      <ul>
        {habilidades.map((habilidad) => (
          <li key={habilidad}>{habilidad}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;