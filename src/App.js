import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import LoginForm from './components/LoginForm'
import BreadCrumbs from './components/BreadCrumb'
import Repos from './components/Repos'
import Issues from './components/Issues'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Issues Management System" />
        <LoginForm sendToken={() => {}}/>
        <BreadCrumbs />
        <Repos />
        <Issues/>
      </div>
    );
  }
}

export default App;
