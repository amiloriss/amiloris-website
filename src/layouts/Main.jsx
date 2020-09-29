import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import AboutMe from '../components/AboutMe';
import Greeting from '../components/Greeting';
import Stack from '../components/Stack';
import Projects from '../components/Projects';
import SendEmail from '../components/SendEmail';
import { getData } from '../actions/action';
import { WaveLoading } from 'react-loadingg';
import ThemeToggle from '../components/ThemeToggle';

const Main = ({ myData: { data }, getData, isDark }) => {
  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);
  if (data === null) {
    return <WaveLoading color="#1d3557" />;
  } else
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
  return { myData: state.myData, isDark: state.myData.theme };
};

export default connect(mapStateToProps, { getData })(Main);
