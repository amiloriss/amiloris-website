import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getData } from '../actions/action';
import Project from './Project';
import ProjectDetail from './ProjectDetail';

import { Route } from 'react-router-dom';

const Projects = ({ myData: { projects } }) => {
  useEffect(() => {
    getData();
    // eslint-disable - next - line
  }, []);
  console.log();
  return (
    <section className="projects" id="projects">
      <h2>
        my projects <i className="fas fa-folder"></i>
      </h2>
      <div className="projects-wrapper">
        <ul className="projects-list">
          {Object.values(projects).map((project) => {
            return <Project key={project.id} info={project} />;
          })}
        </ul>
      </div>

      {Object.values(projects).map((project) => {
        return (
          <Route
            path={`/${project.name}`}
            render={() => {
              return <ProjectDetail key={project.id} info={project} />;
            }}
          />
        );
      })}
    </section>
  );
};

const mapStateToProps = (state) => {
  return { myData: state.myData.data };
};

export default connect(mapStateToProps)(Projects);
