import React, { Component } from "react"

class ExtLink extends Component {
  render() {
    return (
      <a href={this.props.link} class={"bpstextlink"} target={"_blank"} rel={"noopener noreferrer"} title={this.props.title}>
        {this.props.children}
      </a>
    )
  }
}

export default ExtLink