import React from 'react';

import store from '../../store';
import { Provider } from 'react-redux';

// import logo from '../../logo.svg';
import Header from '../HomePage/Header/Header';
import Main from '../HomePage/Main/Main';
import Footer from '../HomePage/Footer/Footer';
import './App.css';

class App extends React.Component{
  render() {
  
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
