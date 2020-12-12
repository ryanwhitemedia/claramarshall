import React from "react"

import Logo from "../../svgs/logo.svg"

import "./footer.scss"

const Footer = () => (
  <footer className="Footer">
    <Logo className="logo" />
    <p className="name">Clara Marshall</p>
    <a className="email" href="mailto:clara@claramarshall.com">
      clara@claramarshall.com
    </a>
    <div className="locationContainer">
      <p>Toronto, ON</p>
      <span className="seperator" />
      <p>Canada</p>
    </div>
  </footer>
)

export default Footer
