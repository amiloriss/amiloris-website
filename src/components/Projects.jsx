import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getData } from '../actions/action';
import Project from './Project';
import ProjectDetail from './ProjectDetail';

import { Link, Route, Switch } from 'react-router-dom';

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
        <Route
          exact
          path="/"
          render={() => {
            return (
              <ul className="projects-list">
                {Object.values(projects).map((project) => {
                  return <Project info={project} />;
                })}
              </ul>
            );
          }}
        />

        {Object.values(projects).map((project) => {
          const { name, description, tech, cover } = project;
          return (
            <Route
              path={`/${name}`}
              render={() => <ProjectDetail info={project} />}
            />
          );
        })}
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return { myData: state.myData.data };
};

export default connect(mapStateToProps)(Projects);
