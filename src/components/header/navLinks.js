import React, { Component } from "react";
import { Link } from "gatsby";

function ListItem(props) {
  const isActive = (pathName) => {
    return pathName === props.pathName ? 1 : 0;
  };

  let currentTheme = "light";

  if (typeof window !== `undefined`) {
    currentTheme = localStorage.theme;
  }

  const getColor = (themeNow) => (themeNow === "light" ? "#3355FF" : "#001681");

  return (
    <li className={"navBarLinkListItem"}>
      <Link title={props.title} to={props.to} activeClassName={"active"}>
        {props.children}
      </Link>
    </li>
  );
}

class NavLinks extends Component {
  render() {
    return (
      <ul className={"ul_nav_bar"}>
        <ListItem title={"Home"} to={"/"} pathName={this.props.pathName}>
          Home
        </ListItem>
        <ListItem title={"About"} to={"/about"} pathName={this.props.pathName}>
          About
        </ListItem>
        <ListItem
          title={"Projects"}
          to={"/projects"}
          pathName={this.props.pathName}
        >
          Projects
        </ListItem>
        <li className={"navBarLinkListItem"}>
          <a
            href={"https://resume.rajrajhans.com"}
            rel={"noopener noreferrer"}
            title={"Raj's resume"}
            target={"_blank"}
          >
            Resume
          </a>
        </li>
        <ListItem
          title={"Contact"}
          to={"/contact"}
          pathName={this.props.pathName}
        >
          Contact
        </ListItem>
      </ul>
    );
  }
}

export default NavLinks;
