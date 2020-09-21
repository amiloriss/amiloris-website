import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getData } from '../actions/action';

const Greeting = ({ myData: { portfolio_wallpaper }, getData }) => {
  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);
  return (
    <section
      style={{ background: `url(${portfolio_wallpaper})` }}
      className="greeting"
      id="greeting"
    >
      <h1 className="greeting-title">
        How is it going. I glad to see you on my website. Have enjoy.
      </h1>
    </section>
  );
};

const mapStateToProps = (state) => {
  return { myData: state.myData.data };
};

export default connect(mapStateToProps, { getData })(Greeting);
