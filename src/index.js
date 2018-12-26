import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { BrowserRouter as Router } from 'react-router-dom'
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import booksReducer from './redux/reducer'

const store = createStore(
  combineReducers({
    books: booksReducer,
    form: formReducer,
  }),
  applyMiddleware(thunkMiddleware),
)

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
