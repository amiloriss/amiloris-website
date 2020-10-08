import React from 'react';
import Navbar from '../components/Navbar';
import NavbarSmallScreen from '../components/NavbarSmallScreen';
import PropTypes from 'prop-types';
import ThemeToggle from '../components/ThemeToggle';

const Header = ({ title }) => {
  return (
    <header className="main-header">
      <NavbarSmallScreen />
      <h1 className="title">{title}</h1>
      <Navbar />
      <ThemeToggle />
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
