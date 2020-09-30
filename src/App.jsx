import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.scss';

import AppWrapper from './components/AppWrapper';

import store from './store/store';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <AppWrapper />
      </div>
    </Provider>
  );
};

export default App;
