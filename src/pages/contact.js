import React, { Component } from "react"
import {ContactSVG} from "../static/svgs"
import Layout from "../components/layout"
import HerosectionPage from "../components/herosectionPage"
import "../styles/contact.scss"

class Contact extends Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <HerosectionPage title={"Contact Me"} svg={<ContactSVG/>} />

      </Layout>
    )
  }
}

export default Contact