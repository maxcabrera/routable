import actions from '../../constants/actions'

export function enterToken(value) {
  return {
    type: actions.USER.ENTER_TOKEN,
    payload: value
  }
}

export function saveToken() {
  return (dispatch, getState) => {
    let token = getState().user.token
    if(token !== ''){
      dispatch({
        type: actions.USER.SAVE_TOKEN,
      })
    } else {
      dispatch({
        type: actions.ERRORS.SHOW_ERROR,
        payload: 'No valid token'
      })
    }
  }
}