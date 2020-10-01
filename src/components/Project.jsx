import React from 'react';
import { Link, Route } from 'react-router-dom';

const Project = ({ info }) => {
  const { name, cover } = info;
  return (
    <>
      <Link to={`/${name}`}>
        <Route
          exact
          path="/"
          render={() => {
            return (
              <li>
                <div>
                  <img src={cover} alt="" />
                </div>
              </li>
            );
          }}
        />
      </Link>
    </>
  );
};

export default Project;
