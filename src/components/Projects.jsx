import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getData } from '../actions/action';

const Projects = ({ myData }) => {
  useEffect(() => {
    getData();
    // eslint-disable - next - line
  }, []);
  return (
    <section className="projects" id="projects">
      <h2>my projects</h2>
    </section>
  );
};

const mapStateToProps = (state) => {
  return { myData: state.myData };
};

export default connect(mapStateToProps)(Projects);
