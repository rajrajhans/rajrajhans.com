import Layout from "../components/layout"
import InternalLinkDown from "../components/utilComponents/internalLinkUp"
import SEO from "../components/seo"
import "../styles/index.scss"
import "../styles/homepageHero.css"
import TagIcon from "../static/tagIcon"
import CalendarIcon from "../static/calendarIcon"
import Img from "gatsby-image"
import React, { Component } from "react"
import InternalLink from "../components/utilComponents/internalLink"
import { graphql } from "gatsby"

class Index extends Component {
  render() {

    const blogs = this.props.data.allMdx.nodes

    return (
      <Layout location={this.props.location} customNavClass={"homePageNav"} customclass={"homePageWrapper"}>

        <div className="homepageHeroCntnr">
          <div id='stars'/>
          <div id='stars2'/>
          <div id='stars3'/>
          <div id='title'>
          <span>
            Hi, I'm Raj
          </span>
            <br/>
          <span>

          </span>
          </div>
        </div>

        <div className="homeBlogGrid">

          <div className="homeBlogArchivesLinkMobile">
            <InternalLink link={"/archives"} title={"Explore Blogs by Categories"}>
              <i className={"fa fa-folder-o"}/>
              Browse Blog Archives
            </InternalLink>
          </div>

          <div className="homeBlogHeadingBox">
            <div className="homeBlogGridHeading">
              Blog Posts Till Now
              <div className={"homeBlogGridHeadingLine"}/>
            </div>

            <div className="homeBlogArchivesLink">
              <InternalLink link={"/archives"} title={"Explore Blogs by Categories"}>
                Browse Blog Archives
                <div className={"homeBlogGridArchivesLine"}/>
              </InternalLink>
            </div>
          </div>

          <div className="homeBlogBoxesCntnr">
          {blogs.map((blog, id) => (
            <div className="homeBlogBox" key={id}>
              <InternalLinkDown link={blog.fields.slug}>
                <div className="homeBlogImage">
                  <Img fixed={blog.frontmatter.featuredImage.childImageSharp.fixed}/>
                </div>

                <div className="homeBlogTitle">
                  {blog.frontmatter.title}
                </div>

                <div className="homeBlogDateTag">
              <span className={"homeBlogDate"}>
                <CalendarIcon/>
                <span> {blog.frontmatter.date}</span>
              </span>

                  <span className={"homeBlogTag"}>
                <TagIcon/>
                <span> {blog.frontmatter.mainTag}</span>
              </span>
                </div>

                <div className="homeBlogExcerpt">
                  {blog.frontmatter.description}
                </div>
              </InternalLinkDown>
            </div>
          ))}
          </div>
        </div>
      </Layout>
    )
  }
}

export default Index

export const pageQuery = graphql`
  query IndexQuery {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          title
          description
          date (formatString: "MMMM Do, YYYY")
          mainTag
          featuredImage {
            childImageSharp {
              fixed(width: 300) {
                ...GatsbyImageSharpFixed_withWebp
              }
            }
          }
        }
      }
    }
  }
`
