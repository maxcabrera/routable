import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Button from './components/Button'
import LoginForm from './components/LoginForm'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Issues Management System" />
        <LoginForm sendToken={() => {}}/>
      </div>
    );
  }
}

export default App;
