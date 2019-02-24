import axios from 'axios'
import github from '../../constants/github'
import actions from "../../constants/actions";

export function openIssues(repo) {
  return async (dispatch, getState) => {
    const issuesInApp = getState().issues.issues || {}
    let found = false

    for(let key in issuesInApp){
      if(parseInt(key, 10) === repo.id) {
        found = true
        dispatch({
          type: actions.ISSUES.UPDATE_ISSUES,
          payload: {
            issues: issuesInApp[repo.id],
            repoSelected: repo.id,
            repoName: repo.name
          },
        })
      }
    }

    if(!found) {
      dispatch({
        type: actions.ISSUES.FETCHING_ISSUES,
      })

      const token = getState().user.token
      const issuesData = await axios.get(`${github.GET_ISSUES_URL}/${repo.owner.login}/${repo.name}/issues?access_token=${token}`)
      let issues = issuesData.data.map((issue, index) => {

        let assignee = (issue.assignee) ? {
          login: issue.assignee.login,
          avatar_url: issue.assignee.avatar_url,
          html_url: issue.assignee.html_url
        } : null

        return {
          id: issue.id,
          html_url: issue.html_url,
          number: index + 1,
          title: issue.title,
          state: issue.state,
          created_at: issue.created_at,
          updated_at: issue.updated_at,
          body: issue.body,
          closed_at: issue.closed_at,
          assignee: assignee,
        }

      })

      dispatch({
        type: actions.ISSUES.UPDATE_ISSUES,
        payload: {
          issues,
          repoSelected: repo.id,
          repoName: repo.name },
      })
    }
  }
}

export function clearRepoSelected() {
  return {
    type: actions.ISSUES.RESET_REPO_SELECTED
  }
}

export function moveUp(issue){
  return (dispatch, getState) => {
    let repoToModify = getState().issues.repoSelected
    let issues = getState().issues.issues[repoToModify]
    let index = issues.findIndex((iss) => {
      return issue.id === iss.id
    })
    if(index > 0) {
      let temp = issues[index - 1]
      issues[index - 1] = issue
      issues[index] = temp

      dispatch({
        type: actions.ISSUES.MOVE_ISSUE_UP,
        payload: {
          repoId: repoToModify,
          issues: issues,
        }
      })
    }
  }
}

export function moveDown(issue){
  return (dispatch, getState) => {
    let repoToModify = getState().issues.repoSelected
    let issues = getState().issues.issues[repoToModify]
    let index = issues.findIndex((iss) => {
      return issue.id === iss.id
    })
    if(index < issues.length - 1) {
      let temp = issues[index + 1]
      issues[index + 1] = issue
      issues[index] = temp

      dispatch({
        type: actions.ISSUES.MOVE_ISSUE_DOWN,
        payload: {
          repoId: repoToModify,
          issues: issues,
        }
      })
    }

  }
}