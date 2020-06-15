import React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"
import Pic from "../static/raj-profile-pic-1.png"
import toKebabCase from "../utils/toKebabCase"
import InternalLink from "../components/internalLink"

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.mdx
  const { previous, next } = pageContext

  return (
    <Layout location={location} customclass={"navBlogPost"} customNavClass={"navBlogPostBar"} >
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <div className="blogHeroContainer">
        <div className="blogHero">

          <div className="heroBlogTags">
            {post.frontmatter.heroTags.map((herotag, indexx) => (
              <InternalLink link={`/tags/${toKebabCase(herotag)}`} title={"titlee"}>
                <span className={"heroBlogTag heroBlogTag1"} key={indexx}>
                      {herotag}
                </span>
              </InternalLink>
            ))}

          </div>

          <div className="heroBlogTitle">
            {post.frontmatter.title}
          </div>

          <div className="heroAuthorRow">

            <div className={"heroAuthorName"}>
              By Raj Rajhans  -
            </div>

            <div className="heroDate">
              {post.frontmatter.date}
            </div>

          </div>

          <div className="heroReadingTime">
            5 minute read
          </div>

        </div>
      </div>

      <div className="blogContentContainer">
        <div className="blogContent">

          <div className="blogText">
            <MDXRenderer>{post.body}</MDXRenderer>
          </div>

          <div className="blogBottomRow">
            <div className="blogBtmAthrRow">
              <div className="blogBtmAthrImg">
                <img src={Pic} alt={"raj-rajhans"}/>
              </div>

              <div className="blogBtmAthrTxt">
                <span className="blogBtmAthr">Author</span>

                <div className="blogBtmAthrTxtName">
                  Raj Rajhans
                </div>

                <div className="blogBtmAthrBio">
                  Ambivert. Perpetually audacious. Tech aficionado, and a striving nonconformist
                </div>
              </div>
            </div>

            <div className="blogBtmTags">
              <div className="blogBtmTagsTxt">Tags :</div>
              <div className="blogBtmTagsCntnr">
                {post.frontmatter.tags.map((tag, index) => (
                  <InternalLink link={`/tags/${toKebabCase(tag)}`}>
                    <span className={"heroBlogTag"} key={index}>
                      {tag}
                    </span>
                  </InternalLink>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

    </Layout>

  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM Do, YYYY")
        description
        tags
        heroTags
      }
    }
  }
`
