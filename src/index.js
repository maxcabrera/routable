import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import throttle from 'lodash/throttle'

import App from './App'
import store from './store'
import * as serviceWorker from './serviceWorker'
import { saveState } from "./utils/local-storage";

store.subscribe(throttle(() => {
  saveState({
    user: store.getState().user,
    repos: store.getState().repos,
    errors: store.getState().errors,
  })
},1000))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
