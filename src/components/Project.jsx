import React from 'react';

const Project = ({ info }) => {
  const { name, description, tech, cover } = info;
  return (
    <li>
      <div>
        <img src={cover} alt="" />
      </div>
    </li>
  );
};

export default Project;
