//========//
// App.js //
//========//
import React from 'react'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import Layout from './components/Layout'
import './index.scss';
const store = configureStore()

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
      <Layout />
      </Provider>
    );
  }
}

export default App