//===========//
// Layout.js //
//===========//
import React from 'react'
import Site from './layout/Site'
import Content from './layout/Content'
import Footer from './layout/Footer'
import Nav from './layout/Nav'
import { connect } from "react-redux"
import { fetchData } from '../actions/actions'
import { BrowserRouter as Router} from 'react-router-dom'

class Layout extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchData())
  }

  render() {
    const { error, loading, items } = this.props;

    console.log(items)

    if (error) {
      return <div>Error! {error.message}</div>
    }

    if (loading) {
      return <div>Loading...</div>
    }

    return (
      <Router>
        <Site>
          <Nav />
          <Content items={items} />
          <Footer />
        </Site>
      </Router>
    )
  }
}

const mapStateToProps = state => ({
  items: state.items,
  loading: state.loading,
  error: state.error
})

export default connect(mapStateToProps)(Layout);