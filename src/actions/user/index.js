import actions from '../../constants/actions'

export function enterToken(value) {
  return {
    type: actions.USER.ENTER_TOKEN,
    payload: value
  }
}