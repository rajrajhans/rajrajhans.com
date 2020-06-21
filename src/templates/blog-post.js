import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Pic from "../static/raj-profile-pic-1.png"
import toKebabCase from "../utils/toKebabCase"
import InternalLink from "../components/utilComponents/internalLink"
import InternalLinkUp from "../components/utilComponents/internalLinkUp"
import InternalLinkRight from "../components/utilComponents/internalLinkRight"
import Heading from "../components/blogPostComponents/heading"
import Subheading from "../components/blogPostComponents/subheading"
import Subsubheading from "../components/blogPostComponents/subsubheading"
import Listitem from "../components/blogPostComponents/listitem"
import Blockquote from "../components/blogPostComponents/blockquote"

//TODO : Add Keywords, URL & image to the SEO component

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.mdx
  const { previous, next } = pageContext

  const components = {
    h1:Heading,
    h2:Subheading,
    h3:Subsubheading,
    li:Listitem,
    blockquote: Blockquote
  }

  return (
    <Layout location={location} customclass={"navBlogPost"} customNavClass={"navBlogPostBar"} >
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description}
      />
      <div className="blogHeroContainer">
        <div className="blogHero">

          <div className="heroBlogTags">
            {post.frontmatter.heroTags.map((herotag, indexx) => (
              <InternalLinkUp link={`/tags/${toKebabCase(herotag)}`} title={`Explore all posts tagged with "${herotag}"`}>
                <span className={"heroBlogTag heroBlogTag1"} key={indexx}>
                      {herotag}
                </span>
              </InternalLinkUp>
            ))}

          </div>

          <div className="heroBlogTitle">
            <h1>{post.frontmatter.title}</h1>
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
            {post.frontmatter.readingTime} minute read
          </div>

        </div>
      </div>

      <div className="blogContentContainer">
        <div className="blogContent">

          <div className="blogText">
            <MDXProvider components={components}>
              <MDXRenderer>{post.body}</MDXRenderer>
            </MDXProvider>
          </div>

          <div className="blogprevnext">
            <div className="blogPrev">
              {previous ?
                <InternalLink link={previous.fields.slug} title={previous.frontmatter.title}>
                  <div className={"blogPrevCntnr"}>
                  <svg className={"blogPrevSVG"} stroke="#3355ff" fill="#3355ff" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em"><path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"></path></svg>
                    {previous.frontmatter.title}
                  </div>
                </InternalLink>
              : null}
            </div>

            <div className="blogNext">
              {next ?
                <InternalLinkRight link={next.fields.slug} title={next.frontmatter.title}>
                <div className={"blogNextCntnr"}>
                  <svg className={"blogNextSVG"} stroke="#3355ff" fill="#3355ff" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em"><path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path></svg>
                    {next.frontmatter.title}
                </div>
                </InternalLinkRight>
              : null}
            </div>
          </div>

          <div className="blogBottomRow">
            <div className="blogBtmAthrRow">
              <div className="blogBtmAthrImg">
                <img src={Pic} alt={"raj-rajhans"}/>
              </div>

              <div className="blogBtmAthrTxt">
                <span className="blogBtmAthr">Author</span>

                <div className="blogBtmAthrTxtName">
                  <h2>Raj Rajhans</h2>
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
                  <InternalLinkUp link={`/tags/${toKebabCase(tag)}`} title={`Explore all posts tagged with "${tag}"`}>
                    <span className={"heroBlogTag"} key={index}>
                      {tag}
                    </span>
                  </InternalLinkUp>
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
        readingTime
      }
    }
  }
`
