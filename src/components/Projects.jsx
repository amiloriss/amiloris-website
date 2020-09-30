import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getData } from '../actions/action';
import Project from './Project';

const Projects = ({ myData: { projects } }) => {
  useEffect(() => {
    getData();
    // eslint-disable - next - line
  }, []);

  return (
    <section className="projects" id="projects">
      <h2>
        my projects <i className="fas fa-folder"></i>
      </h2>
      <div className="projects-wrapper">
        <ul className="projects-list">
          {Object.values(projects).map((project) => {
            const { id, name, description, tech, cover } = project;
            return <Project info={project} />;
          })}
        </ul>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return { myData: state.myData.data };
};

export default connect(mapStateToProps)(Projects);
