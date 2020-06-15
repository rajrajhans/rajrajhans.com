import React from "react"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"
import SEO from "../components/seo"
import "../styles/tags.scss"
import toKebabcase from "../utils/toKebabCase"
import { TagsBlogSVG } from "../static/svgs"
import HerosectionPage from "../components/herosectionPage"

const TagsPage = ({
                    data: {
                      allMdx: { group },
                      site: {
                        siteMetadata: { title },
                      },
                    },
                    location,
                  }) => (
  <Layout location={location}>
    <SEO
      title="All Tags"
      keywords={[`blog`, `gatsby`, `javascript`, `react`]}
    />
    <HerosectionPage title={"Tags"} svg={<TagsBlogSVG/>}/>
    <div>
      <h1>Tags</h1>
      <ul>
        {group.map(tag => (
          <li key={tag.fieldValue}>
            <Link to={`/tags/${toKebabcase(tag.fieldValue)}/`}>
              {tag.fieldValue} ({tag.totalCount})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </Layout>
)

export default TagsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
