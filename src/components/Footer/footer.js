import React from "react"
import Link from "gatsby-link"

import Logo from "../../svgs/logo.svg"

import "./footer.scss"

const Footer = () => {
  const coded = "A8cdc@A8cdcDcdFIc88.AvD"
  const key = "7WOCErTumL0bFwha5XlvSGq1PHYidMVD4BjzNIcJU8Qk9y62geKs3RpfZxotnA"
  const shift = coded.length
  let link = ""
  for (let i = 0; i < coded.length; i++) {
    if (key.indexOf(coded.charAt(i)) === -1) {
      let ltr = coded.charAt(i)
      link += ltr
    } else {
      let ltr = (key.indexOf(coded.charAt(i)) - shift + key.length) % key.length
      link += key.charAt(ltr)
    }
  }

  return (
    <footer className="Footer">
      <div className="innerContent">
        <Link to="/">
          <Logo className="logo" />
        </Link>
        <div className="contactContainer">
          <p className="name">Clara Marshall</p>
          <a
            className="email"
            target="_blank"
            rel="noreferrer"
            href={`mailto:${link}`}
          >
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
}

export default Footer
