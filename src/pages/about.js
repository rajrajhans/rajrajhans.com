import React, { Component } from "react"
import Layout from "../components/layout"
import HerosectionPage from "../components/herosectionPage"
import "../styles/about.scss"
import {AboutSVG, AboutBlogSVG} from "../static/svgs"
import Pic from "../static/raj-profile-pic-1.png"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo"

class About extends Component {
  render() {
    console.log(this.props.data)
    return (
      <Layout location={this.props.location}>
        <SEO
          title={"About"}
          description={"About Raj Rajhans. Raj Rajhans is a web developer studying computer engineering. This blog reflects Raj\'s ideas, projects and learnings."}
          url={"/about"}
        />
        <HerosectionPage title={"About"} subtitle={"some gay shit"} svg={<AboutSVG/>}/>

        <div className={"content-container"}>

          <div className="aboutPageContainer">
            <div className="aboutRaj">
              <div className="aboutRajText">
                <div className="aboutRajTextHeading">
                  <h2>About Raj</h2>
                  <div className={"aboutBorderBottom"}/>
                </div>

                <div className="aboutRajTextContent">
                  <p>
                    Raj is a Second Year Computer Engineering student at VIT, Pune. A tech-aficionado, as he likes to put it, Raj is also a freelance web designer and developer.
                  </p>

                  <p>
                    As an aspiring software developer, you will find him speaking computerese, barely comprehensible to anyone else.
                    But don’t let his overtly composed and calm visible delude you. He can easily grab your attention with his eccentric and uncanny theories about ‘anything’ in general.
                    Raj is an active tech blogger as he feels explaining helps in understanding.
                  </p>

                  <p>
                    When not raising pull requests on GitHub, you will find him lost in a world of thriller books and soothing music.
                  </p>
                </div>
              </div>

              <div className="aboutRajPhoto">
                <Img fluid={this.props.data.allFile.nodes[0].childImageSharp.fluid} alt={"Raj Rajhans"}/>
              </div>
            </div>

            <div className="aboutBlog">
              <div className="aboutBlogPhoto">
                <AboutBlogSVG/>
              </div>

              <div className="aboutBlogText">
                <div className="aboutBlogTextHeading">
                  <h2>About the Blog</h2>
                  <div className={"aboutBorderBottom"}/>
                </div>

                <div className="aboutBlogTextContent">

                  <p>
                    Oppenheimer once said, “The best way to learn is to teach”.
                  </p>
                  <p>
                    Blogging is a way to document one’s learnings. If you haven’t, go watch <a href={"https://www.youtube.com/watch?v=RVKofRN1dyI"} target={"_blank"}> Gary Vaynerchuk’s Document, Don’t Create video.</a>
                  </p>

                  <p>
                    Developers are creators, and documenting the creating process only improves the developer’s skills. Writing about something solidifies the learning process. It’s easy to say you’ve done some reading on X, but if you have a blog post and a GitHub project to back up, it really makes it more believable. Not just that, it has the potential to help someone. A small contribution is always better than no contribution.
                  </p>

                  <p>
                    The aim of this blog is to document the projects, ideas, and the learnings from the projects that I would be working on.
                  </p>


                </div>
              </div>
            </div>
          </div>

        </div>
      </Layout>
    )
  }
}

export default About

export const query = graphql`
  query AboutImageQuery {
    allFile(filter: {name: {eq: "raj-profile-pic-1"}}) {
      nodes {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`