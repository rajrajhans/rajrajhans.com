import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import "../styles/tags.scss"
import toKebabcase from "../utils/toKebabCase"
import { TagsBlogSVG } from "../static/svgs"
import HerosectionPage from "../components/herosectionPage"
import InternalLinkRight from "../components/utilComponents/internalLinkRight"

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
      title={"Blog Archives"}
      description={"Blog Archives - Raj Rajhans. View past blogs by category. This blog reflects Raj\'s ideas, projects and learnings."}
      url={"/archives"}
    />
    <HerosectionPage title={"Blog Archives"} svg={<TagsBlogSVG/>}/>
    <div className={"content-container"}>
      <div className={"TagsContentTitle"}>Blogs by Categories -</div>
      <ul className={"allTagsList"}>
        {group.map(tag => (
        <InternalLinkRight link={`/tags/${toKebabcase(tag.fieldValue)}/`} title={`Check out all posts tagged "${tag.fieldValue}"`}>
          <li class={"achTagCntnr"} key={tag.fieldValue}>
              <div className="achTagName">
                <span className={"brand-color"}>#</span>{tag.fieldValue}
              </div>

              <div className="achTagCount">
                {tag.totalCount} Posts
              </div>
            </li>
          </InternalLinkRight>
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
