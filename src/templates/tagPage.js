import React from "react"

import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import InternalLinkRight from "../components/utilComponents/internalLinkRight"
import InternalLink from "../components/utilComponents/internalLink"
import InternalLinkDown from "../components/utilComponents/internalLinkDown"

const Tags = ({ pageContext, data, location }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMdx
  const siteTitle = data.site.siteMetadata.title
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
    } tagged with "${tag}"`

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={tagHeader} />
      <div className={"heroSection"}>
        <div className="titleSection">
          <div className="title"><span className={"brand-color"}>{totalCount}</span> post{totalCount === 1 ? "" : "s"} tagged with {tag}</div>
        </div>

      </div>
      <ul>
        {edges.map(({ node }) => {
          const { slug } = node.fields
          const { title } = node.frontmatter
          return (
            <li key={slug}>
              <InternalLinkDown link={slug}>{title}</InternalLinkDown>
            </li>
          )
        })}
      </ul>

      <InternalLink link={"/tags"}>
        <div className={"blogPrevCntnr"}>
          <svg className={"blogPrevSVG"} stroke="#3355ff" fill="#3355ff" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em"><path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"></path></svg>
          All Tags
        </div>
      </InternalLink>
    </Layout>
  )
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`