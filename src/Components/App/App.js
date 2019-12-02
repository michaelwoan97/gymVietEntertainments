import React from 'react';

import { createStore,applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import logo from '../../logo.svg';
import Header from '../HomePage/Header/Header';
import Main from '../HomePage/Main/Main';
import Footer from '../HomePage/Footer/Footer';
import './App.css';

class App extends React.Component{
  render() {
    const store= createStore(() =>[], {},applyMiddleware(thunk))
    return (
      <Provider store={store}>
          <Header />
          <Main />
          <Footer />
        </Provider>
    );
  }
}

export default App;
