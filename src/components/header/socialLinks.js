import React, { Component } from "react"
import {Link} from "gatsby"

function ListItem(props) {

  return(
    <li>
      <a href={props.to} title={props.name}>
        img
      </a>
    </li>
  )
}

class NavLinks extends Component {

  render() {
    return (
      <ul className={"social-links"}>
        <ListItem to={"https://facebook.com"}>Facebook</ListItem>
        <ListItem to={"https://twitter.com"}>Twitter</ListItem>
      </ul>
    )
  }
}

export default NavLinks