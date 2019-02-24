import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import LoginForm from './components/LoginForm'
import BreadCrumbs from './components/BreadCrumb'
import Repos from './components/Repos'
import Issues from './components/Issues'
import RepoTitle from './components/RepoTitle'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Issues Management System" />
        <LoginForm sendToken={() => {}}/>
        <BreadCrumbs />
        <Repos />
        <RepoTitle title="Repo # 1"/>
        <RepoTitle title="Repo # 2" clearRepoSelection={()=>{ console.log('hola')}}/>
        <Issues/>
      </div>
    );
  }
}

export default App;
