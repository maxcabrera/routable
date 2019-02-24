import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as userActions from './actions/user'

import './App.css';
import Header from './components/Header'
import LoginForm from './components/LoginForm'
import BreadCrumbs from './components/BreadCrumb'
import Repos from './components/Repos'
import Issues from './components/Issues'
import RepoTitle from './components/RepoTitle'

const Dashboard = (props) => {
  return (
    <div>
      <BreadCrumbs />
      <Repos />
      <RepoTitle title="Repo # 1"/>
      <RepoTitle title="Repo # 2" clearRepoSelection={()=>{ console.log('hola')}}/>
      <Issues/>
    </div>
  )
}

class App extends Component {
  render() {
    const { user, userActions } = this.props

    return (
      <div className="App">
        <Header title="Issues Management System" />
        {!user.authenticated
          && <LoginForm
              tokenValue={user.token}
              updateInput={userActions.enterToken}
              sendToken={(e) => {
                console.log('hello')
              }} />}

        {user.authenticated && <Dashboard />}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

function mapDispatchToProps(dispatch) {
  return {
    userActions: bindActionCreators(userActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
