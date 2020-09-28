import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getData } from '../actions/action';

const Stack = ({ myData: { tech_stack } }) => {
  useEffect(() => {
    getData();
    // eslint - disable - next - line;
  }, []);
  return (
    <section className="stack" id="stack">
      <h2>Tech Stack</h2>
      <ul className="tech-stack-list">
        {Object.values(tech_stack).map((el, id) => {
          return (
            <li key={id}>
              <img width="80px" src={el.logo} alt="logo" />{' '}
              <span>{el.name}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

const mapStateToProps = (state) => {
  return { myData: state.myData.data };
};

export default connect(mapStateToProps, { getData })(Stack);
