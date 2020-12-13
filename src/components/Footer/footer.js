import React from "react"

import Logo from "../../svgs/logo.svg"

import "./footer.scss"

const Footer = () => (
  <footer className="Footer">
    <div className="innerContent">
      <Logo className="logo" />
      <div className="contactContainer">
        <p className="name">Clara Marshall</p>
        <a className="email" href="mailto:clara@claramarshall.com">
          clara@claramarshall.com
        </a>
      </div>
      <div className="locationContainer">
        <p>Toronto, On</p>
        <span className="seperator" />
        <p>Canada</p>
      </div>
    </div>
  </footer>
)

export default Footer
