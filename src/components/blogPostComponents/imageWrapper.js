import React, { Component } from "react";

class ImageWrapper extends Component {
  width = this.props.width ? this.props.width : "60%";

  render() {
    return (
      <div
        className={"bpstImgWrapper"}
        style={{ width: this.width, margin: "auto" }}
      >
        {this.props.children}
      </div>
    );
  }
}

export default ImageWrapper;
