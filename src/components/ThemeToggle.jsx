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
        marginBottom: 0,
      }}
    >
      <i
        style={{
          color: darkMode ? '  #457b9d' : '#a8dadc',
          fontSize: 35 + 'px',
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
