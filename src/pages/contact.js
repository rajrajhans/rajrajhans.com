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
              <ul>

                <li className={"text-secondary"}>
                  <span className={"contactIcon"}>
                    <Envelope/>
                  </span>
                  <a href={"mailto:me@rajrajhans.com"} target={"_blank"}>
                    me@rajrajhans.com
                  </a>
                </li>

                <li className={"text-secondary"}>
                  <span className={"contactIcon"}>
                    <MapMarker/>
                  </span>
                  Pune
                </li>

              </ul>

            </div>
        </div>
      </Layout>
    )
  }
}

export default Contact