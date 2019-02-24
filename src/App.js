import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import LoginForm from './components/LoginForm'
import BreadCrumbs from './components/BreadCrumb'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Issues Management System" />
        <LoginForm sendToken={() => {}}/>
        <BreadCrumbs />
      </div>
    );
  }
}

export default App;
