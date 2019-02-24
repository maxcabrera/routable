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
  const {
    user,
    repos,
    reposActions,
    issues,
    issuesActions
  } = props
  if(user.authenticated && !repos.fetched) {
    reposActions.getRepos()
  }
console.log('issues', issues)
  return (
    <div>
      <BreadCrumbs />
      {!issues.repoSelected
      && <Repos repos={repos.repos} openIssues={issuesActions.openIssues}  />}

      {issues.repoSelected
      && <RepoTitle title={issues.repoName} clearRepoSelection={()=>{ console.log('hola')}}/>}

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
    issues: state.issues,
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
