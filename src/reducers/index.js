import { combineReducers } from 'redux'
import user from './user'
import repos from './repos'
import issues from './issues'
import errors from './errors'

export default combineReducers({ user, repos, issues, errors })