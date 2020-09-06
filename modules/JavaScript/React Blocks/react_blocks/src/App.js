import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/header';
import Navigation from './components/navigation';
import Main from './components/main';
import Advertisement from './components/advertisement';
import SubContents from './components/subcontents';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Navigation />
        <Main>
            <SubContents />
            <SubContents />
            <SubContents />
            <Advertisement />
        </Main>
      </div>
    );
  }
}

export default App;
