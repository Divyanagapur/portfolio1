import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio built with React and plain CSS.",
      link: "https://github.com/your-username/portfolio",
    },
    {
      title: "Todo App",
      description: "A todo app with add/delete/save features using local storage.",
      link: "https://github.com/your-username/todo-app",
    },
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>
      {projects.map((project, i) => (
        <div key={i} className="project-card">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </div>
      ))}
    </section>
  );
};

export default Projects;
