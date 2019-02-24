import actions from '../../constants/actions'

const initialState = {
  error: false,
  errorMessage: ''
}

const ErrorsReducer = (state = initialState, action) => {
  switch (action.type){
    case actions.ERRORS.SHOW_ERROR:
      return {
        ...state,
        error: true,
        errorMessage: action.payload,
      }
    case actions.ERRORS.HIDE_ERROR:
      return {
        ...state,
        error: false,
        errorMessage: action.payload
      }
    default:
      return state
  }
}

export default ErrorsReducer
