import React, { Component } from "react"
import {Link} from "gatsby"

function ListItem(props) {

  return(
    <li className={"navBarLinkListItem"}>
      <Link to={props.to}>{props.children}</Link>
    </li>
  )
}

class Navlinks extends Component {

  render() {
    return (
      <ul>
        <ListItem to={"/"}>Home</ListItem>
        <ListItem to={"/about"}>About</ListItem>
      </ul>
    )
  }
}

export default Navlinks