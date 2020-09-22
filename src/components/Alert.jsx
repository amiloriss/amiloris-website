import React from 'react';

const Alert = ({ active }) => {
  return (
    <div className="overlay">
      <div className={`alert ${active ? 'active' : 'not-active'}`}>
        Please fill the all fields
      </div>
    </div>
  );
};

export default Alert;
