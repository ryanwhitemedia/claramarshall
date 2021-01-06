import React, { useState, useEffect } from "react"
import Link from "gatsby-link"
import classnames from "classnames"
import PropTypes from "prop-types"

import "./header.scss"

import Logo from "../../svgs/logo.svg"

const Header = ({ path }) => {
  const [showMenu, setShowMenu] = useState(false)
  const [style, setStyle] = useState()
  const [hideCircle, setHideCircle] = useState(false)

  const getDotStyle = page => {
    if (page === "/") {
      setStyle({ left: "16px" })
      setHideCircle(false)
    } else if (page === "/projects/") {
      setStyle({ left: "125px" })
      setHideCircle(false)
    } else if (page === "/contact/") {
      setStyle({ left: "242px" })
      setHideCircle(false)
    } else {
      setStyle({ opacity: 0 })
      setHideCircle(true)
    }
  }

  useEffect(() => {
    getDotStyle(path)
  }, [path])

  return (
    <header className="Header">
      <div
        className={classnames("innerContent", showMenu && "innerContentHidden")}
      >
        <Link to="/">
          <Logo className="logo" />
        </Link>
        <button className="hamburger" onClick={() => setShowMenu(true)}>
          <span className="line" />
          <span className="line" />
        </button>
      </div>
      <div className={classnames("menu", showMenu && "showMenu")}>
        <button className="closeButton" onClick={() => setShowMenu(false)}>
          <span className="line" />
          <span className="line" />
        </button>
        <nav>
          <ul className="list">
            <Link
              className="listItem"
              to="/"
              activeClassName="activeListItem"
              onMouseOver={() => getDotStyle("/")}
              onMouseLeave={() => getDotStyle(path)}
            >
              Home
              <span className="activeDot" />
            </Link>
            <Link
              className="listItem"
              to="/projects"
              activeClassName="activeListItem"
              onMouseOver={() => getDotStyle("/projects/")}
              onMouseLeave={() => getDotStyle(path)}
            >
              Projects
              <span className="activeDot" />
            </Link>
            <Link
              className="listItem"
              to="/contact"
              activeClassName="activeListItem"
              onMouseOver={() => getDotStyle("/contact/")}
              onMouseLeave={() => getDotStyle(path)}
            >
              Contact
              <span className="activeDot" />
            </Link>
            <span role="presentation" className="circle" />

            <span
              role="presentation"
              className={classnames("circle circleDesktop", {
                hideCircle: hideCircle,
                showCircle: !hideCircle,
              })}
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
