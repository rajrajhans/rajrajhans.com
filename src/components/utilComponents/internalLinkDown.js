import React, { Component } from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

// Expected Props
//  - link
//  - title
//  - children

class InternalLink extends Component {
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
      <AniLink cover direction={"down"} bg={getColor(currentTheme)} duration={1.2} to={this.props.link} title={this.props.title}>
        {this.props.children}
      </AniLink>
    )
  }
}

export default InternalLink