import actions from '../../constants/actions'

const initialState = {
  token: '',
  authenticated: false,
}

const UserReducer = (state = initialState, action) => {
  switch (action.type){
    case actions.USER.ENTER_TOKEN:
      return state
    case actions.USER.SEND_TOKEN:
      return state
    default:
      return state
  }
}

export default UserReducer
