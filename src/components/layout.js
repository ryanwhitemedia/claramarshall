/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import "../styles/global.scss"

import Header from "./Header/header"
import Footer from "./Footer/footer"

const Layout = ({ children, hideFooter, path }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header
        siteTitle={data.site.siteMetadata?.title || `Title`}
        path={path}
      />
      <div>
        <main>{children}</main>
        {!hideFooter && <Footer />}
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  hideFooter: PropTypes.bool,
  path: PropTypes.string,
}

export default Layout
