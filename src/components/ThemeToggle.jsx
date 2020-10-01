import React, { useState } from 'react';
import { changeTheme } from '../actions/action';
import { connect } from 'react-redux';

const ThemeToggle = ({ changeTheme }) => {
  const [darkMode, setDarkMode] = useState(true);

  const onToggle = () => {
    setDarkMode(!darkMode);
    changeTheme(darkMode);
  };
  return (
    <label
      htmlFor="toggle-theme"
      style={{
        cursor: 'pointer',
        position: 'fixed',
        bottom: 0,
        right: '7px',
        zIndex: 0,
      }}
    >
      <i
        style={{
          color: darkMode ? '  #457b9d' : '#a8dadc',
          fontSize: 40 + 'px',
        }}
        className={darkMode ? 'fas fa-moon' : 'fas fa-sun'}
      ></i>
      <input
        id="toggle-theme"
        style={{ display: 'none' }}
        onChange={onToggle}
        type="checkbox"
      />
    </label>
  );
};

export default connect(null, { changeTheme })(ThemeToggle);
