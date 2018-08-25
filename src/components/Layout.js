//===========//
// Layout.js //
//===========//
import React from 'react'
import Site from './layout/Site'
import Footer from './layout/Footer'
import Nav from './layout/Nav'
import { connect } from "react-redux"
import { fetchData } from '../actions/actions'

class Layout extends React.Component {
  
<<<<<<< HEAD
  componentWillUpdate() {
		window.scrollTo(0, 0);
	}

=======
>>>>>>> db87159c7d99da5c46ffe79ae8b4cedfe530c4ba
  componentDidMount() {
    this.props.dispatch(fetchData())
  }

  render() {
    const { error, loading, items } = this.props;

    const RouteComponent = this.props.component

    // console.log(items, this)

    if (error) {
      return <div>Error! {error.message}</div>
    }

    if (loading) {
      return <div>Loading...</div>
    }

    return (
      <Site>
        <Nav />
        <RouteComponent items={items} error={error} loading={loading} match={this.props.computedMatch}/>
        <Footer />
      </Site>
    )
  }
}

const mapStateToProps = state => ({
  items: state.items,
  loading: state.loading,
  error: state.error
})

export default connect(mapStateToProps)(Layout);