import React, { useState } from "react"
import classnames from "classnames"
import { setSessionPassword } from "@mkitio/gatsby-theme-password-protect/src/utils/utils"
import CircleArrow from "../../../svgs/circle-arrow.svg"

import "./passwordPage.scss"
import Layout from "../../../components/layout"

const PasswordProtect = () => {
  const [password, setPassword] = useState("")
  const [isButtonHovered, buttonHover] = useState(false)

  const onSubmit = event => {
    if (event) {
      event.preventDefault()
    }
    setSessionPassword(password)
    window.location.reload() // eslint-disable-line
  }

  const handleButtonClick = event => {
    if (event.key === "Enter" || event.keyCode === 13) {
      onSubmit()
    }
  }

  return (
    <Layout hideFooter={true}>
      <div className="PasswordPage">
        <h2 className="title">Thank you for your interest</h2>
        <p className="text">
          Unfortunatley some projects are client sensitive, to view my public
          work please visit{" "}
          <a
            className="link"
            href="https://www.behance.net/claramarshall"
            target="_blank"
            rel="noreferrer"
          >
            my behance page.
          </a>
        </p>

        <form onSubmit={onSubmit} className="form">
          <input
            autoComplete="current-password"
            className="input"
            name="password"
            type="password"
            placeholder="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            onKeyDown={e => handleButtonClick(e)}
          />
          <button
            type="submit"
            className={classnames("button", isButtonHovered ? "test" : null)}
            onMouseEnter={() => buttonHover(true)}
            onMouseLeave={() => buttonHover(false)}
          >
            <CircleArrow className="circleArrow" />
          </button>
        </form>
      </div>
    </Layout>
  )
}

export default PasswordProtect
