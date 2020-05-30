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

        <div className="content-container">

          <div className="projectBox">

            <div className="projectImage">
              Image
            </div>

            <div className="projectTitle">
              title
            </div>

            <div className="projectDescription">
              description
            </div>

            <div className="projectLinks">
              links
            </div>

            <div className="projectTags">
              #tags
            </div>

          </div>

        </div>

      </Layout>
    )
  }
}

export default Projects