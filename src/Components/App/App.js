import React from 'react';
import logo from '../../logo.svg';
import Header from '../HomePage/Header/Header';
import Main from '../HomePage/Main/Main';
import Footer from '../HomePage/Footer/Footer';
import './App.css';

class App extends React.Component{
  render() {
    return (
      <section>
          <Header />
          <Main />
          <Footer />
      </section>
    );
  }
}

export default App;
