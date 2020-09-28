import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getData } from '../actions/action';

const Projects = ({ myData: { projects } }) => {
  useEffect(() => {
    getData();
    // eslint-disable - next - line
  }, []);
  console.log(projects);
  return (
    <section className="projects" id="projects">
      <h2>
        my projects <i className="fas fa-folder"></i>
      </h2>
      <div className="projects-wrapper">
        <ul className="projects-list">
          {Object.values(projects).map((project) => {
            const { name, description, tech, cover, id } = project;
            return (
              <li key={id}>
                <div>
                  <img src={cover} alt="project" />
                </div>
              </li>
            );
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
