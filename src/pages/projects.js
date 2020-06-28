import React, { Component } from "react"
import Layout from "../components/layout"
import "../styles/projects.scss"
import HerosectionPage from "../components/herosectionPage"
import {ProjectsSVG} from "../static/svgs"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo"

class Projects extends Component {
  render() {

    const data = this.props.data.allProjectsJson.nodes;
    const webdevdata = this.props.data.allWebdevJson.nodes;

    return (
      <Layout location={this.props.location} customclass={"projectsWrapper"}>
        <SEO
          title={"Projects"}
          description={"Projects by Raj Rajhans. Raj Rajhans is a web developer studying computer engineering. This blog reflects Raj's ideas, projects and learnings."}
          url={"/projects"}
        />

        <HerosectionPage title={"Projects"} svg={<ProjectsSVG/>}/>

        <div className="content-container projectBox_container">
          {data.map((node, index) => (
            <div className="projectBox" key={node.id}>
              <a className={"nostylelink"} rel={"noopener noreferrer"} target={"_blank"}  href={node.website ? node.website : (node.casestudy ? node.casestudy : node.github)}>
                <div className="projectImage">
                  {/*<img src={projectimg} alt={"projectimg"}/>*/}
                  <Img fluid={node.image.childImageSharp.fluid}/>

                  <div className="projectImageOverlay">
                    <div className="projectImageIcon">
                      <i className={"fa fa-link"}/>
                    </div>
                  </div>
                </div>
              </a>

              <div className="projectTitle">
                <a className={"nostylelink"} rel={"noopener noreferrer"} target={"_blank"}  href={node.casestudy ? node.casestudy : (node.website ? node.website : node.github)}>
                  <h2>{node.title}</h2>
                </a>
              </div>

              <div className="projectSubtitle">
                {node.subtitle}
              </div>

              <hr className={"projectLine"}/>

              <div className="projectDescription">
                {node.description}
              </div>

              <div className="projectLinks">
                {node.github ? (
                  <a href={node.github} title={"View Code on GitHub"}  target={"_blank"} rel={"noopener noreferrer"}>
                    <div className="projectLink">
                      <i className={"fa fa-github fa-lg"}/>
                    </div>
                  </a>
                ): null}

                {node.casestudy ? (
                  <a href={node.casestudy} title={"View Case Study"} target={"_blank"} rel={"noopener noreferrer"}>
                    <div className="projectLink">
                      <i className={"fa fa-file-text fa-lg"} style={{fontSize:"27px"}}/>
                    </div>
                  </a>
                ): null}

                {node.website ? (
                  <a href={node.website} title={"View Live Version"} target={"_blank"} rel={"noopener noreferrer"}>
                    <div className="projectLink">
                      <i className={"fa fa-globe fa-lg"} style={{fontSize:"30px"}}/>
                    </div>
                  </a>
                ): null}
              </div>

              <div className="projectTags">
                {node.tags.map((tag)=>(
                  "#"+tag+"  "
                ))}
              </div>

            </div>
          ))}
        </div>

        <div className="webdevtext">Freelance / Website Design & Development Projects<div className={"aboutBorderBottom"}/></div>
        <div className="content-container projectBox_container">
          {webdevdata.map((node, index) => (
            <div className="projectBox" key={node.id}>
              <a className={"nostylelink"} rel={"noopener noreferrer"} target={"_blank"}  href={node.website ? node.website : (node.casestudy ? node.casestudy : node.github)}>
                <div className="projectImage">
                  {/*<img src={projectimg} alt={"projectimg"}/>*/}
                  <Img fluid={node.image.childImageSharp.fluid}/>

                  <div className="projectImageOverlay">
                    <div className="projectImageIcon">
                      <i className={"fa fa-link"}/>
                    </div>
                  </div>
                </div>
              </a>

              <div className="projectTitle">
                <a className={"nostylelink"} rel={"noopener noreferrer"} target={"_blank"}  href={node.casestudy ? node.casestudy : (node.website ? node.website : node.github)}>
                  <h2>{node.title}</h2>

                </a>
              </div>

              <div className="projectDescription webdevDescription">
                <span dangerouslySetInnerHTML={{__html: node.description}}/>
              </div>

              <div className="projectLinks">
                {node.github ? (
                  <a href={node.github} title={"View Code on GitHub"}  target={"_blank"} rel={"noopener noreferrer"}>
                    <div className="projectLink">
                      <i className={"fa fa-github fa-lg"}/>
                    </div>
                  </a>
                ): null}

                {node.casestudy ? (
                  <a href={node.casestudy} title={"View Case Study"} target={"_blank"} rel={"noopener noreferrer"}>
                    <div className="projectLink">
                      <i className={"fa fa-file-text fa-lg"} style={{fontSize:"27px"}}/>
                    </div>
                  </a>
                ): null}

                {node.website ? (
                  <a href={node.website} title={"View Live Version"} target={"_blank"} rel={"noopener noreferrer"}>
                    <div className="projectLink">
                      <i className={"fa fa-globe fa-lg"} style={{fontSize:"30px"}}/>
                    </div>
                  </a>
                ): null}
              </div>

              <div className="projectTags">
                {node.tags.map((tag)=>(
                  "#"+tag+"  "
                ))}
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
  query MyQuery12 {
    allProjectsJson {
      nodes {
        id
        title
        subtitle
        description
        image{
              childImageSharp {
                fluid(maxWidth: 400) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
              }
        website
        github
        casestudy
        tags
      }
    }
    allWebdevJson {
      nodes {
        id
        title
        description
        image{
              childImageSharp {
                fluid(maxWidth: 400) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
              }
        website
        tags
      }
    }
  }
`