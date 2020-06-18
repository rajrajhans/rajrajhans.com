import React, { Component, Fragment } from "react"
import {ThemeToggler} from 'gatsby-plugin-dark-mode'

class DarkLightSwitcher extends Component {
  render() {
    return (

      <ThemeToggler>
        {({ theme, toggleTheme }) => {
          const iconClass =
            theme === 'light' ? 'fa fa-moon-o fa-2x' : 'fa fa-sun-o fa-2x'
          return (
            <Fragment>
              <i
                className={"themeSwitcher " + iconClass}
                onClick={() => {
                  const nextTheme = theme === 'light' ? 'dark' : 'light'
                  toggleTheme(nextTheme)
                }}
              />
            </Fragment>
          )
        }}
      </ThemeToggler>

    )
  }
}

export default DarkLightSwitcher