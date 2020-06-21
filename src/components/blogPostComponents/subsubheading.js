import React, { Component } from "react"

class Subsubheading extends Component {
  render() {
    return (
      <h4 className={"blogPostSubSubheading"}>
        {this.props.children}
      </h4>
    )
  }
}

export default Subsubheading