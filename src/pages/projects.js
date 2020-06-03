import React, { Component } from "react"
import Layout from "../components/layout"
import "../styles/projects.scss"
import HerosectionPage from "../components/herosectionPage"
import {ProjectsSVG} from "../static/svgs"
import projectimg from "../static/ss.png"

class Projects extends Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <HerosectionPage title={"Projects"} svg={<ProjectsSVG/>}/>

        <div className="content-container">

          <div className="projectBox">
            <a href={"/"}>
            <div className="projectImage">
              <img src={projectimg} alt={"projectimg"}/>
              <div className="projectImageOverlay">
                <div className="projectImageIcon">
                  <i className={"fa fa-link"}/>
                </div>
              </div>
            </div>
            </a>

            <div className="projectTitle">
              title
            </div>

            <div className="projectDescription">
             desc Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
            </div>

            <div className="projectLinks">
              <a href={"google.com"}>
                <div className="projectLink">
                  <i className={"fa fa-github fa-lg"}/>
                </div>
              </a>
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