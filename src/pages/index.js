import Layout from "../components/layout"
import InternalLinkDown from "../components/utilComponents/internalLinkUp"
import SEO from "../components/seo"
import "../styles/index.scss"
import TagIcon from "../static/tagIcon"

import React, { Component } from "react"

class Index extends Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <div className="homeBlogGrid">

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
                <svg width={"16px"} fill="none" stroke="currentColor" className="stroke-current" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><path d="m16 2v4"/><path d="m8 2v4"/><path d="m3 10h18"/></svg>
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
