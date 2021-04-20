import React, { Component } from "react";

class ImageWrapper extends Component {
  width = this.props.width ? this.props.width : "60%";
  boxShadow = this.props.isTransparent ? "none" : null;

  render() {
    return (
      <div
        className={"bpstImgWrapper"}
        style={{
          width: this.width,
          margin: "auto",
          boxShadow: this.boxShadow,
        }}
      >
        {this.props.children}
      </div>
    );
  }
}

export default ImageWrapper;
