import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"

const AboutPage = () => (
  <React.Fragment>
    <SEO title="About" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </React.Fragment>
)

export default AboutPage
