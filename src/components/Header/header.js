import React, { useState, useEffect } from "react"
import Link from "gatsby-link"
import classnames from "classnames"
import PropTypes from "prop-types"

import "./header.scss"

import Logo from "../../svgs/logo.svg"

const Header = ({ path }) => {
  const [showMenu, setShowMenu] = useState(false)
  const [style, setStyle] = useState()

  const getDotStyle = page => {
    if (page === "/") {
      setStyle({ left: "16px" })
    } else if (page === "/projects/") {
      setStyle({ left: "125px" })
    } else if (page === "/contact/") {
      setStyle({ left: "242px" })
    }
  }

  useEffect(() => {
    getDotStyle(path)
  }, [])

  return (
    <header className="Header">
      <div className="innerContent">
        <Link to="/">
          <Logo className="logo" />
        </Link>
        <button className="hamburger" onClick={() => setShowMenu(!showMenu)}>
          <span className="line" />
          <span className="line" />
        </button>
      </div>
      <div className={classnames("menu", showMenu && "showMenu")}>
        <nav>
          <ul className="list">
            <Link
              className="listItem"
              to="/"
              onMouseOver={() => getDotStyle("/")}
              onMouseLeave={() => getDotStyle(path)}
            >
              Home
            </Link>
            <Link
              className="listItem"
              to="/projects"
              onMouseOver={() => getDotStyle("/projects/")}
              onMouseLeave={() => getDotStyle(path)}
            >
              Projects
            </Link>
            <Link
              className="listItem"
              to="/contact"
              onMouseOver={() => getDotStyle("/contact/")}
              onMouseLeave={() => getDotStyle(path)}
            >
              Contact
            </Link>
            <span role="presentation" className="circle" />
            <span
              role="presentation"
              className="circle circleDesktop"
              style={style}
            />
          </ul>
        </nav>
      </div>
    </header>
  )
}

Header.propTypes = {
  path: PropTypes.string,
}

export default Header
