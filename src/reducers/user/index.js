import actions from '../../constants/actions'

const initialState = {
  token: '',
  authenticated: false,
}

const UserReducer = (state = initialState, action) => {
  switch (action.type){
    case actions.USER.ENTER_TOKEN:
      return {
        ...state,
        token: action.payload,
      }
    case actions.USER.SAVE_TOKEN:
      return {
        ...state,
        authenticated: true,
      }
    default:
      return state
  }
}

export default UserReducer
