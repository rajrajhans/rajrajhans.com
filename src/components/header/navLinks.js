import React, { Component } from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import DarkLightSwitcher from "./darkLightSwitcher"
import {Link} from "gatsby"

function ListItem(props) {
  const isActive = (pathName) => {
    return (pathName === props.pathName ? 1 : 0)
  }

  if (typeof window !== `undefined`) {
    var currentTheme = localStorage.theme;
  }
  else{
    var currentTheme = 'light';
  }

  const getColor=(themeNow)=>(
    themeNow==='light'?"#3355FF":"#001681"
  )

  return(
    <li className={"navBarLinkListItem"}>
      <Link cover bg={getColor(currentTheme)} direction={"down"} duration={0.75} to={props.to} className={isActive(props.to) ? "active" : ""}>{props.children}</Link>
    </li>
  )
}

class NavLinks extends Component {

  render() {
    return (
      <ul className={"ul_nav_bar"}>
        <ListItem to={"/"} pathName={this.props.pathName}>Home</ListItem>
        <ListItem to={"/about"} pathName={this.props.pathName}>About</ListItem>
        <ListItem to={"/projects"} pathName={this.props.pathName}>Projects</ListItem>
        <ListItem to={"/contact"} pathName={this.props.pathName}>Contact</ListItem>
      </ul>
    )
  }
}

export default NavLinks