import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import registerServiceWorker from './registerServiceWorker'
import reducers from './reducers/reducers'
import thunk from 'redux-thunk'
import App from './App'
import './index.scss'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)

ReactDOM.render((
  <Provider store={createStoreWithMiddleware(reducers)}>
      <App />
  </Provider>
), document.getElementById('root'))
registerServiceWorker()
