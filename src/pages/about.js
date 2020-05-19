import React, { Component } from "react"
import Layout from "../components/layout"

class About extends Component {
  render() {
    return (
      <Layout location={this.props.location}>
        Hello from About Page
      </Layout>
    )
  }
}

export default About