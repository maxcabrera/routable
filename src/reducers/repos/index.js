import actions from '../../constants/actions'

const initialState = {
  fetched: false,
  repos: []
}

const ReposReducer = (state = initialState, action) => {
  switch (action.type){
    case actions.REPOS.UPDATE_REPOS:
      return {
        ...state,
        fetched: true,
        repos: action.payload
      }
    default:
      return state
  }
}

export default ReposReducer