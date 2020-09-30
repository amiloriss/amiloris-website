import React from 'react';
import Navbar from '../components/Navbar';
import PropTypes from 'prop-types';

const Header = ({ title }) => {
  return (
    <header className="main-header">
      <h1 className="title">{title}</h1>
      <Navbar />
    </header>
  );
};

Header.defaultProps = {
  title: 'Portfolio',
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
