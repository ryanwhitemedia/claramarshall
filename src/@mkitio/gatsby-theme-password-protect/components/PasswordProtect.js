import React, { useState } from "react"
import classnames from "classnames"
import { setSessionPassword } from "@mkitio/gatsby-theme-password-protect/src/utils/utils"

const PasswordProtect = () => {
  const [password, setPassword] = useState("")
  const [isButtonHovered, buttonHover] = useState(false)

  const onSubmit = event => {
    event.preventDefault()
    setSessionPassword(password)
    window.location.reload() // eslint-disable-line
  }

  return (
    <div>
      <h1>Welcome</h1>
      <h4>Enter Password</h4>

      <form onSubmit={onSubmit}>
        <input
          name="password"
          type="password"
          value={password}
          onChange={event => setPassword(event.target.value)}
        />

        <button
          type="submit"
          className={classnames(isButtonHovered ? "test" : null)}
          onMouseEnter={() => buttonHover(true)}
          onMouseLeave={() => buttonHover(false)}
        >
          GO
        </button>
      </form>
    </div>
  )
}

export default PasswordProtect
