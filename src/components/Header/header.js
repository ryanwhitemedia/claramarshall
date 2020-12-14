import React, { useState } from "react"
import Link from "gatsby-link"
import classnames from "classnames"
import "./header.scss"

import Logo from "../../svgs/logo.svg"

const Header = () => {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <header className={classnames(showMenu && "fixHeader", "Header")}>
      <div className="innerContent">
        <Logo className="logo" />
        <button className="hamburger" onClick={() => setShowMenu(!showMenu)}>
          <span className="line" />
          <span className="line" />
        </button>
      </div>
      <div className={classnames("menu", showMenu && "showMenu")}>
        <nav>
          <ul className="list">
            <Link className="listItem" to="/">
              Home
            </Link>
            <Link className="listItem" to="/">
              Projects
            </Link>
            <Link className="listItem" to="/">
              Contact
            </Link>
            <span role="presentation" className="circle" />
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
