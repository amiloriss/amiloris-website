import React from 'react';

const Alert = ({ active, msg }) => {
  return (
    <div className="overlay">
      <div className={`alert ${active ? 'active' : 'not-active'}`}>{msg}</div>
    </div>
  );
};

export default Alert;
