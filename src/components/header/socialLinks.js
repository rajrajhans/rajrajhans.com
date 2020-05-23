import React, { Component } from "react"
import "../../styles/sociallinks.scss"

class SocialLinks extends Component {

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center ">
            <ul className="list-inline social-links">
              <li>
                <a href="https://github.com/rajrajhans" target={"_blank"} className="btn-social btn-outline" data-toggle="tooltip"
                   data-placement="top" title="Github">
                  <i className="fa fa-github"/>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/_rajrajhans" target={"_blank"} className="btn-social btn-outline" title="Twitter">
                  <i className="fa fa-twitter"/>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/rajrajhans/" target={"_blank"} className="btn-social btn-outline" title="LinkedIn">
                  <i className="fa fa-linkedin"/>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/_rajrajhans/" target={"_blank"} className="btn-social btn-outline" title="Instagram">
                  <i className="fa fa-instagram"/>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default SocialLinks