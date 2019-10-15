import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import { Container, Row, Col } from "reactstrap"
import headerStyles from "../styles/header.module.scss"
import logo from "../images/BDlogo.png"
import mobileHeaderStyles from "../styles/mobile.module.scss"
import "../styles/theme.scss"
const Header = ({ siteTitle }) => {
  const [menuActive, setMenuState] = useState(false)
  const handleClick = () => {
    setMenuState(!menuActive)
    if (menuActive) {
    } else {
    }
  }
  return (
    <section>
      <header>
        <Container fluid className={headerStyles.headerContainer}>
          <Row>
            <Col sm="2" xs="12" className={headerStyles.brandContainer}>
              <Link to="/">
                <img src={logo} alt="BD-logo" />
              </Link>
            </Col>
            <Col sm="10" xs="0">
              <div className={headerStyles.navContainer}>
                <nav>
                  <ul className={headerStyles.navList}>
                    <li>
                      <Link
                        className={headerStyles.navItem}
                        activeClassName={headerStyles.activeNavItem}
                        to="/"
                      >
                        HOME
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={headerStyles.navItem}
                        activeClassName={headerStyles.activeNavItem}
                        to="/about/"
                      >
                        ABOUT
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </Col>
          </Row>
          <div className={`TopNavBar ${menuActive ? "nav-active" : ""}`}>
            <div className="nav-icon" onClick={() => handleClick()}>
              <div></div>
            </div>
          </div>
        </Container>
      </header>
      <div
        className={`mobile-menu ${menuActive ? "mobile-menu-active" : ""}`}
      ></div>
    </section>
  )
}
Header.propTypes = {
  siteTitle: PropTypes.string,
}
Header.defaultProps = {
  siteTitle: ``,
}
export default Header
