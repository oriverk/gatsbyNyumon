import React from "react"
import { Link } from "gatsby"
import "../styles/header.css"
import LOGO_IMG from "../../static/logo.png"

const Header = () => (
  <header>
    <Link to="/">
      <img src={LOGO_IMG} className="logo-image" alt="logo"></img>
    </Link>
  </header>
)

export default Header
