import React from "react";
import projectData from "../data/projectData";

const Projects = () => {
  return (
    <div className="container projects py-5">
      <h1 className="text-center mb-5">Projects</h1>
      <p className="text-center mb-5">I had the opportunity to work on these projects throughout my career. Working on these projects helped me a lot in learning new skills. All the clients felt quite satisfied and amazed with my work!

Each project came with its own set of challenges, which pushed me to grow and adapt quickly. I'm proud of the impact my contributions had on both the design and functionality of these websites.</p>
      <div className="row g-4">
        {projectData.map((project, index) => (
          <div className="col-md-4" key={index}>
            <div className="card h-100 shadow-sm">
              <img
                src={project.image}
                className="card-img-top"
                alt={project.title}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{project.title}</h5>
                <h6 className="card-subtitle">{project.type}</h6>
                <p className="card-text">{project.description}</p>
                <a
                  href={project.link}
                  className="btn btn-outline-dark"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Site
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
