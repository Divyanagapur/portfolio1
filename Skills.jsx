import React from "react";

const Skills = () => {
  const skills = ["React", "JavaScript", "HTML", "CSS", "Git", "VS Code"];
  return (
    <section id="skills">
      <h2>Skills</h2>
      <ul className="skills-list">
        {skills.map((skill, i) => (
          <li key={i}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
