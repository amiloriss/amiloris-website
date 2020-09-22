import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.scss';

import Header from './layouts/Header';
import Main from './layouts/Main';
import Footer from './layouts/Footer';

import store from './store/store';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <Provider store={store} r>
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    </Provider>
  );
};

export default App;
