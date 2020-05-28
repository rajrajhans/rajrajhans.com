import React, { Component } from "react"
import { ContactSVG, Envelope, MapMarker } from "../static/svgs"
import Layout from "../components/layout"
import HerosectionPage from "../components/herosectionPage"
import "../styles/contact.scss"

class Contact extends Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <HerosectionPage title={"Contact Me"} svg={<ContactSVG/>} />

        <div className="content-container">
            <div className="contactDetails">
              <p style={{"marginTop":"15px","marginBottom":"0"}}>Get in touch!</p>
              <ul>

                <a href={"mailto:me@rajrajhans.com"} target={"_blank"}>
                  <li>
                    <span className={"contactIcon"}>
                      <i className="fa fa-2x fa-envelope"/>
                    </span>
                      me@rajrajhans.com
                  </li>
                </a>

                <a href={"https://twitter.com/_rajrajhans"} target={"_blank"}>
                  <li>
                    <span className={"contactIcon"}>
                      <i className="fa fa-2x fa-twitter"/>
                    </span>
                      @_rajrajhans
                  </li>
                </a>

              <a href={"https://www.instagram.com/_rajrajhans/"} target={"_blank"}>
                <li style={{"marginBottom":"15px"}}>
                  <span className={"contactIcon"}>
                    <i className="fa fa-2x fa-instagram"/>
                  </span>
                    @_rajrajhans
                </li>
              </a>


              </ul>

            </div>
        </div>
      </Layout>
    )
  }
}

export default Contact