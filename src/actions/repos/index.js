import axios from 'axios'
import github from '../../constants/github'
import actions from "../../constants/actions";

export function getRepos() {
  return async (dispatch, getState) => {
    const token = getState().user.token
    const reposData = await axios.get(`${github.GET_REPOS_URL}?access_token=${token}`)
    let repos = reposData.data.map(repo => {
      return {
        id: repo.id,
        name: repo.name,
        full_name: repo.full_name,
        description: repo.description,
        open_issues_count: repo.open_issues_count,
        html_url: repo.html_url,
        owner: {
          login: repo.owner.login,
          avatar_url: repo.owner.avatar_url,
          type: repo.owner.type
        }
      }
    })

    dispatch({
      type: actions.REPOS.UPDATE_REPOS,
      payload: repos,
    })
  }
}