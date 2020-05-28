import React, { Component } from "react"
import Logo from "./header/logo"
import NavLinks from "./header/navLinks"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import "../styles/footer.scss"
import {FooterWave} from "./icons"

class FooterLinks extends Component {
  render() {
    return (
      <ul className="list-inline social-links footerLinks">
        <li>
          <a href="https://github.com/rajrajhans" target={"_blank"} rel={"noreferrer"} className="btn-social btn-outline" data-toggle="tooltip"
             data-placement="top" title="Github">
            <i className="fa fa-github"/>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/_rajrajhans" target={"_blank"} rel={"noreferrer"} className="btn-social btn-outline" title="Twitter">
            <i className="fa fa-twitter"/>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/rajrajhans/" target={"_blank"} rel={"noreferrer"} className="btn-social btn-outline" title="LinkedIn">
            <i className="fa fa-linkedin"/>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/_rajrajhans/" target={"_blank"} rel={"noreferrer"} className="btn-social btn-outline" title="Instagram">
            <i className="fa fa-instagram"/>
          </a>
        </li>
      </ul>
    )
  }
}

class Footer extends Component {

  render() {
    if (typeof window !== `undefined`) {
      var currentTheme = localStorage.theme;
    }
    else{
      var currentTheme = 'light';
    }

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