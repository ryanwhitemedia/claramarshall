import { Link } from "gatsby"
import React from "react"

import SEO from "../components/seo"
import Arrow from "../svgs/arrow.svg"
import Logo from "../svgs/logo.svg"

import "../styles/error.scss"

const NotFoundPage = () => (
  <main hideFooter="true">
    <SEO title="404: Not found" />
    <div className="Error">
      <Link to="/" className="logo">
        <Logo  />
      </Link>

      <div className="innerContainer">
        <h1 className="title">404</h1>
        <p className="text">
          I’m sorry, that page doesn’t exist. Please try one of the pages below
          instead.
        </p>
        <ul className="list">
          <li className="listItem">
            <Link className="link" to="/">
              Home
              <Arrow className="arrow" />
            </Link>
          </li>
          <li className="listItem">
            <Link className="link" to="/projects">
              Projects
              <Arrow className="arrow" />
            </Link>
          </li>
          <li className="listItem">
            <Link className="link" to="/contact">
              Contact
              <Arrow className="arrow" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </main>
)

export default NotFoundPage
