import React, { Component } from "react"
import Layout from "../components/layout"
import "../styles/projects.scss"
import HerosectionPage from "../components/herosectionPage"
import {ProjectsSVG} from "../static/svgs"

class Projects extends Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <HerosectionPage title={"Projects"} svg={<ProjectsSVG/>}/>
      </Layout>
    )
  }
}

export default Projects