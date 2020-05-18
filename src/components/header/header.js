import React, { Component, Fragment } from "react"
import DarkLightSwitcher from './DarkLightSwitcher'
import Logo from './Logo'

class Header extends Component {
  render() {
    return (
      <header>
        <Logo/>
         <DarkLightSwitcher/>
      </header>
    )
  }
}

export default Header