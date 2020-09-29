import React from 'react';
import Navbar from '../components/Navbar';
import PropTypes from 'prop-types';

const Header = ({ title }) => {
  onscroll = (e) => {
    console.log(e);
  };
  return (
    <header style={{ boxShadow: '0 0 10px 1px #000' }} className="main-header">
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
