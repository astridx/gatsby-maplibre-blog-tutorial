import React from "react"
import PropTypes from "prop-types"
import Map from "./map"
import PostList from './postList'

const Layout = ({ children }) => {
  return (
    <>
      <Map />
      <div style={{ margin: '0 40px' }}>
        <main>{children}</main>
        <PostList />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout