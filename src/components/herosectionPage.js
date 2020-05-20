import React, { Component } from "react"
import "../styles/heroSection.scss"

class HerosectionPage extends Component {
  render() {
    const {title, subtitle} = this.props

    return (
      <div className={"heroSection"}>
        <div className="title">{title}</div>
      </div>
    )
  }
}

export default HerosectionPage