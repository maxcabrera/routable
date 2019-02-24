import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as userActions from './actions/user'
import * as reposActions from './actions/repos'
import * as issuesActions from './actions/issues'

import './App.css';
import Header from './components/Header'
import LoginForm from './components/LoginForm'
import BreadCrumbs from './components/BreadCrumb'
import Repos from './components/Repos'
import Issues from './components/Issues'
import RepoTitle from './components/RepoTitle'

const Dashboard = (props) => {
  const { user, repos, reposActions, issuesActions } = props
  if(user.authenticated && !repos.fetched) {
    reposActions.getRepos()
  }

  return (
    <div>
      <BreadCrumbs />
      <Repos repos={repos.repos} openIssues={issuesActions.openIssues}  />
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
              sendToken={userActions.saveToken} />}

        {user.authenticated && <Dashboard {...this.props} />}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    repos: state.repos,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    userActions: bindActionCreators(userActions, dispatch),
    reposActions: bindActionCreators(reposActions, dispatch),
    issuesActions: bindActionCreators(issuesActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
