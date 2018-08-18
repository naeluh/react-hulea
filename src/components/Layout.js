//===========//
// Layout.js //
//===========//
import React, { Component } from 'react'
import Site from './layout/Site'
import Content from './layout/Content'
import Footer from './layout/Footer'
import Nav from './layout/Nav'
import PropTypes from 'prop-types'
// import { connect } from 'react-redux'
import {
  fetchPostsIfNeeded,
  invalidateData
} from '../actions/actions'


class Layout extends Component {

  componentDidMount() {
    const { dispatch, selectedData } = this.props
    console.log(this.props)
    dispatch(invalidateData(selectedData))
    dispatch(fetchPostsIfNeeded(selectedData))
  }

  render() {
    const { selectedData, posts, isFetching, lastUpdated } = this.props
    return (
      <Site>
        <Nav />
        <Content posts={posts} selectedData={selectedData} isFetching={isFetching} lastUpdated={lastUpdated}/>
        <Footer />
      </Site>
    )
  }
}


Layout.propTypes = {
  items: PropTypes.array,
  selectedData: PropTypes.string.isRequired,
  posts: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  lastUpdated: PropTypes.number,
  dispatch: PropTypes.func.isRequired
}

/*
function mapStateToProps(state) {
  const { selectedData, postsByData } = state
  const {
    isFetching,
    lastUpdated,
    items: posts
  } = postsByData[selectedData] || {
    isFetching: true,
    items: []
  }

  return {
    selectedData,
    posts,
    isFetching,
    lastUpdated
  }
}
*/


export default Layout