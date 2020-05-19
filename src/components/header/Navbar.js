import React, { Component, Fragment } from "react"
import DarkLightSwitcher from './DarkLightSwitcher'
import Logo from './Logo'
import {Hamburger} from "../icons"

class Navbar extends Component {
  render() {
    return (
      <header>
        <nav>
          <Logo/>
           <DarkLightSwitcher/>
        </nav>
      </header>
    )
  }
}

export default Navbar