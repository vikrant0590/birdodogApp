import React, { Component } from 'react';


import AppRouter from './src/index';
import { Provider } from 'react-redux';
import createStore from './src/redux/create';

const store = createStore();
export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
       <AppRouter/>
       </Provider>
     
    );
  }
}