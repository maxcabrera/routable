import actions from '../../constants/actions'

export function enterToken(value) {
  value = 123
  return {
    type: actions.USER.ENTER_TOKEN,
    payload: value
  }
}