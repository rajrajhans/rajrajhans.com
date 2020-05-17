import React, { Component } from "react"

class Footer extends Component {
  render() {
    return (
      <footer>
        © {new Date().getFullYear()}, Raj Rajhans
      </footer>
    )
  }
}

export default Footer