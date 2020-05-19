import React, { Component } from "react"
import {Link} from "gatsby"
import DarkLightSwitcher from "./darkLightSwitcher"

function ListItem(props) {
  const isActive = (pathName) => {
    return (pathName === props.pathName ? 1 : 0)
  }

  return(
    <li className={"navBarLinkListItem"}>
      <Link to={props.to} className={isActive(props.to) ? "active" : ""}>{props.children}</Link>
    </li>
  )
}

class NavLinks extends Component {

  render() {
    return (
      <ul className={"ul_nav_bar"}>
        <ListItem to={"/"} pathName={this.props.pathName}>Home</ListItem>
        <ListItem to={"/about"} pathName={this.props.pathName}>About</ListItem>
      </ul>
    )
  }
}

export default NavLinks