import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "../components/header"
import Transition from "../components/transition"
import "../styles/layout.scss"
const Layout = ({ children, location }) => {
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
      <Header siteTitle={data.site.siteMetadata.title} />
      <section className="page-section">

        <main className="page-container">
        <Transition location={location}>{children}</Transition></main>
 
        <footer></footer>
      </section>
    </>
  )
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

//Set default props for the location to solve WebpackError: Cannot read property 'pathname' of undefined, with gatsby and netlify
Layout.defaultProps = {
  location: {},
}

export default Layout
