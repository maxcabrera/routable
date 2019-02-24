import constants from '../../constants/actions'

const initialState = {
  issues: {},
  repoSelected: null,
  fetched: false,
}

const IssuesReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.ISSUES.UPDATE_ISSUES:
      let id = action.payload.repoSelected
      return {
        ...state,
        repoSelected: action.payload.repoSelected,
        issues: {
          ...state.issues,
          [id]: action.payload.issues,
        }
      }
    default:
      return state
  }
}

export default IssuesReducer