import React from 'react';
import { connect } from 'react-redux';
import AboutMe from '../components/AboutMe';
import Greeting from '../components/Greeting';
import Stack from '../components/Stack';
import Projects from '../components/Projects';
import SendEmail from '../components/SendEmail';
import ThemeToggle from '../components/ThemeToggle';

const Main = ({ isDark }) => {
  return (
    <main
      style={{
        transition: 'all 0.15s',
        backgroundColor: isDark && '#000',
      }}
    >
      <Greeting />
      <ThemeToggle />
      <div className="container">
        <AboutMe />
        <Stack />
        <Projects />
        <SendEmail />
      </div>
    </main>
  );
};

const mapStateToProps = (state) => {
  return { isDark: state.myData.theme };
};

export default connect(mapStateToProps)(Main);
