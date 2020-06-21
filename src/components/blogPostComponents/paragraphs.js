import React, { Component } from "react"

class Paragraphs extends Component {
  render() {
    return (
      <p class={"bpstpara"}>
        {this.props.children}
      </p>
    )
  }
}

export default Paragraphs