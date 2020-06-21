import React, { Component } from "react"

class Subheading extends Component {
  render() {
    return (
      <h3 class={"blogPostSubheading"}>
        {this.props.children}
      </h3>
    )
  }
}

export default Subheading