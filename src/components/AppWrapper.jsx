import React, { useEffect } from 'react';

import { connect } from 'react-redux';

import Header from '../layouts/Header';
import Main from '../layouts/Main';
import Footer from '../layouts/Footer';

import { getData } from '../actions/action';
import { WaveLoading } from 'react-loadingg';

const AppWrapper = ({ myData, getData }) => {
  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);

  if (myData === null) {
    return <WaveLoading color="#1d3557" />;
  } else
    return (
      <>
        <Header />
        <Main />
        <Footer />
      </>
    );
};

const mapStateToProps = (state) => {
  return {
    myData: state.myData.data,
  };
};

export default connect(mapStateToProps, { getData })(AppWrapper);
