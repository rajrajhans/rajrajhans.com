import React, { Component } from "react"
import "../../styles/blogPostComponents.scss"

class Alert extends Component {
  render() {
    return (
      <div className="bpstAlert">
        <i class={"fa fa-2x fa-info"}/>
        {this.props.children}
      </div>
    )
  }
}

export default Alert