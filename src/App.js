import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Button from './components/Button'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Issues Management System" />
        <Button>Hello</Button>
      </div>
    );
  }
}

export default App;
