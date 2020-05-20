import React, { Component } from "react"
import Logo from "./header/logo"
import NavLinks from "./header/navLinks"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import "../styles/footer.scss"
import {FooterWave} from "./icons"

class FooterLinks extends Component {
  render() {
    return (
      <ul>
        Footer Links here
      </ul>
    )
  }
}

class Footer extends Component {

  render() {
    const currentTheme = localStorage.theme;

    const getColor=(themeNow)=>(
      themeNow==='light'?"#3355FF":"#001681"
    )
    return (
      <footer className="footer" style={{background:<FooterWave/>}}>
        <div className="container">
          <div className="logo">
            <AniLink cover bg={getColor(currentTheme)} duration={0.75} to="/" title={"Raj Rajhans"}>
              <Logo />
            </AniLink>
          </div>
          <div className="navlinks text-secondary">
            <NavLinks />
          </div>
          <div
            className="navlinks text-secondary"
            style={{ marginTop: "20px" }}
          >
            <FooterLinks />
          </div>
          <p className="text-primary f-d">
            Copyright &copy; Raj Rajhans{" "}
            {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    )
  }
}

export default Footer