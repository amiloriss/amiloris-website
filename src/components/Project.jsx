import React from 'react';
import { Link } from 'react-router-dom';

const Project = ({ info }) => {
  const { name, cover } = info;
  return (
    <>
      <Link to={`/${name}`}>
        <li>
          <div>
            <img src={cover} alt="" />
          </div>
        </li>
      </Link>
    </>
  );
};

export default Project;
