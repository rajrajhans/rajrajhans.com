import React, { Component } from "react"

class Blockquote extends Component {
  render() {
    return (
      <blockquote class={"bpstquote"}>
        {this.props.children}
      </blockquote>
    )
  }
}

export default Blockquote