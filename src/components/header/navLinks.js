import React, { Component } from "react"
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
      <Link title={props.title} cover bg={getColor(currentTheme)} direction={"down"} duration={0.75} to={props.to} className={isActive(props.to) ? "active" : ""}>{props.children}</Link>
    </li>
  )
}

class NavLinks extends Component {

  render() {
    return (
      <ul className={"ul_nav_bar"}>
        <ListItem title={"Home"} to={"/"} pathName={this.props.pathName}>Home</ListItem>
        <ListItem title={"About"} to={"/about"} pathName={this.props.pathName}>About</ListItem>
        <ListItem title={"Projects"} to={"/projects"} pathName={this.props.pathName}>Projects</ListItem>
        <li className={"navBarLinkListItem"}>
          <a href={"https://drive.google.com/file/d/1PUSTMe8-KKt852Frg0U0OEJ-wDGgTnJK/view?usp=sharing"} rel={"noopener noreferrer"} title={"Raj's resume"} target={"_blank"}>Resume</a>
        </li>
        <ListItem title={"Contact"} to={"/contact"} pathName={this.props.pathName}>Contact</ListItem>
      </ul>
    )
  }
}

export default NavLinks