import React from "react"
import { Link } from "gatsby"
import 'bootstrap/dist/css/bootstrap.min.css';

import "../styles/theme.scss"
import SEO from "../components/seo"
import { Container} from "reactstrap"

const IndexPage = () => (
  <React.Fragment>
    <SEO title="Home" />
    <Container>
    <h1>Welcome to the BD Hazardous Drug Surface Contamination Assessment Program</h1>
    <p>This program enables the customer to assess the potential for hazardous drug surface contamination in different areas of the healthcare facility and provides useful solutions like the BD® HD Check system to help implement a sustainable monitoring program.</p>
    <div className="button-orange">
    <Link to="/about/">Perform assessment</Link>
    </div>
    </Container>

    </React.Fragment>
)

export default IndexPage
