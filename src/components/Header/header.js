import React, { useState } from "react"
import Link from "gatsby-link"
import classnames from "classnames"
import "./header.scss"

import Logo from "../../svgs/logo.svg"

const Header = () => {
  const [showMenu, setShowMenu] = useState(false)
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
            <Link className="listItem" to="/" activeClassName="activeListItem">
              Home
              <span className="activeDot" />
            </Link>
            <Link
              className="listItem"
              to="/projects"
              activeClassName="activeListItem"
            >
              Projects
              <span className="activeDot" />
            </Link>
            <Link
              className="listItem"
              to="/contact"
              activeClassName="activeListItem"
            >
              Contact
              <span className="activeDot" />
            </Link>
            <span role="presentation" className="circle" />
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
