import React from 'react';
import { Link } from 'react-router-dom';

const ProjectDetail = ({ info }) => {
  const { name, cover, description, tech, github, web } = info;
  return (
    <div className="project-detail">
      <Link to="/">
        <i className="fas fa-arrow-circle-left back-to-list"></i>
      </Link>
      <h2>{name}</h2>
      <div className="project-detail-wrapper">
        <img src={cover} alt="project" />
        <div className="description">
          <p className="descr-text">{description}</p>
          <p className="tech">Technology I used: {tech}</p>
          <div className="links">
            <a target="blank" href={github}>
              <i className="fab fa-github"></i>
            </a>
            <a target="blank" href={web}>
              <i className="fas fa-globe-americas"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
