import React, { Component } from "react"
import "../styles/heroSection.scss"


class HerosectionPage extends Component {
  render() {
    const {title, subtitle, svg} = this.props

    return (
      <div className={"heroSection"}>

        <div className="titleSection">
          <div className="title"><span className={"brand-color"}>~/</span><h1>{title}</h1></div>
        </div>

        <div className="svgSection">
          {svg}
        </div>
      </div>
    )
  }
}

export default HerosectionPage