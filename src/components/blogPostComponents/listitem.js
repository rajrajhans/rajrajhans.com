import React, { Component } from "react"

class Listitem extends Component {
  render() {
    return (
      <li class={"bpstli"}>
        {this.props.children}
      </li>
    )
  }
}

export default Listitem