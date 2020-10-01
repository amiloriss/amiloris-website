import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.scss';

import AppWrapper from './components/AppWrapper';

import store from './store/store';
import { Provider } from 'react-redux';

import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Provider store={store}>
        <div>
          <AppWrapper />
        </div>
      </Provider>
    </Router>
  );
};

export default App;
