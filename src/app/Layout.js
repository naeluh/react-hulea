//===========//
// Layout.js //
//===========//
import React from 'react'
import PropTypes from 'prop-types'
import Site from './layout/Site'
import Content from './layout/Content'
import Footer from './layout/Footer'
import Nav from './layout/Nav'

const Layout = ({ children }) => (
  <Site>
    <Nav />
    <Content/>
    <Footer />
  </Site>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout