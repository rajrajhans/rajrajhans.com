import React, { Component } from "react"
import Layout from "../components/layout"
import "../styles/projects.scss"
import HerosectionPage from "../components/herosectionPage"
import {ProjectsSVG} from "../static/svgs"
import projectimg from "../static/ss.png"
import { graphql } from "gatsby"

class Projects extends Component {
  render() {

    const data = this.props.data.allProjectsJson.nodes;
    console.log(data)

    return (
      <Layout location={this.props.location}>
        <HerosectionPage title={"Projects"} svg={<ProjectsSVG/>}/>

        <div className="content-container projectBox_container">

          {data.map((node, index) => (
            <div className="projectBox" key={node.id}>
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
                {node.title}
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
          ))}
        </div>

      </Layout>
    )
  }
}

export default Projects

export const query = graphql`
  query MyQuery {
    allProjectsJson {
      nodes {
        id
        title
        description
        image
        website
        github
        casestudy
        tags
      }
    }
  }
`