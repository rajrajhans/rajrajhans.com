import React, { Component, Fragment } from "react"
import "../../styles/blogPostComponents.scss"

class Heading extends Component {
  render() {
    return (
      <Fragment>
      <h2 class={"blogPostHeading"}>
        {this.props.children}
      </h2>
      <hr class={"blogPostHeadingLine"}/>
      </Fragment>
    )
  }
}

export default Heading