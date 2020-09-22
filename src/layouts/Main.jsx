import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import AboutMe from '../components/AboutMe';
import Greeting from '../components/Greeting';
import Stack from '../components/Stack';
import Projects from '../components/Projects';
import ConnectWithMe from '../components/ConnectWithMe';
import { getData } from '../actions/action';
import { WaveLoading } from 'react-loadingg';

const Main = ({ myData: { data }, getData }) => {
  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);
  if (data === null) {
    return <WaveLoading color="#1d3557" />;
  } else
    return (
      <main>
        <Greeting />
        <div className="container">
          <AboutMe />
          <Stack />
          <Projects />
          <ConnectWithMe />
        </div>
      </main>
    );
};

const mapStateToProps = (state) => {
  return { myData: state.myData };
};

export default connect(mapStateToProps, { getData })(Main);
