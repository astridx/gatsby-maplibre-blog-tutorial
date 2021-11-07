import React from "react"
import PropTypes from "prop-types"
import Map from "./map"

const Layout = ({ children }) => {
  return (
    <>
      <Map />
      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
