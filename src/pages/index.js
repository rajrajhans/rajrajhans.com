import Layout from "../components/layout"
import InternalLinkDown from "../components/utilComponents/internalLinkUp"
import SEO from "../components/seo"
import "../styles/index.scss"
import TagIcon from "../static/tagIcon"
import CalendarIcon from "../static/calendarIcon"

import React, { Component } from "react"
import InternalLink from "../components/utilComponents/internalLink"

class Index extends Component {
  render() {
    return (
      <Layout location={this.props.location}>
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

          <div className="homeBlogBox">
            <InternalLinkDown link={"/hello-world"}>
            <div className="homeBlogImage">
              <img src={"https://rajrajhans.com/wp-content/uploads/2020/01/heroku-400x250.png"}/>
            </div>

            <div className="homeBlogTitle">
              Blog Post title
            </div>

            <div className="homeBlogDateTag">
              <span className={"homeBlogDate"}>
                <CalendarIcon/>
                <span> May 28th, 2015</span>
              </span>

              <span className={"homeBlogTag"}>
                <TagIcon/>
                <span> Main Tag</span>
              </span>
            </div>

            <div className="homeBlogExcerpt">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
            </div>
            </InternalLinkDown>
          </div>

        </div>
      </Layout>
    )
  }
}

export default Index
//
// export const pageQuery = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
//       edges {
//         node {
//           excerpt
//           fields {
//             slug
//           }
//           frontmatter {
//             date(formatString: "MMMM DD, YYYY")
//             title
//             description
//           }
//         }
//       }
//     }
//   }
// `
