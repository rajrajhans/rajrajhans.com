import React, { Component } from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import "../styles/index.scss";
import "../styles/homepageHero.scss";
import InternalLink from "../components/utilComponents/internalLink";
import BlogPostBox from "../components/utilComponents/blogPostBox";

const ReactRotatingText = require("react-rotating-text");

const age = getAge();

class Index extends Component {
  render() {
    const blogs = this.props.data.allMdx.nodes;

    return (
      <Layout
        location={this.props.location}
        customNavClass={"homePageNav"}
        customclass={"homePageWrapper"}
      >
        <SEO title={"Home"} />
        <div className="homepageHeroCntnr">
          <div id="stars" />
          <div id="stars2" />
          <div id="stars3" />
          <div id="title">
            <div className="homepageHeroIntroCntnr">
              <span className={"homepageHeroHi"}>Hi, I'm Raj</span>
              <br />
              <div className={"homepageHeroIntro homepageHeroIntroTop"}>
                I'm a {age} year old full stack software developer.
              </div>

              <div className=" homepageHeroIntro">
                This blog reflects my{" "}
                <ReactRotatingText
                  items={["ideas.", "projects.", "learnings."]}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="homeBlogGrid">
          <div className="homeBlogArchivesLinkMobile">
            <InternalLink
              link={"/archives"}
              title={"Explore Blogs by Categories"}
            >
              <i className={"fa fa-folder-o"} />
              Browse Archives
            </InternalLink>
          </div>

          <div className="homeBlogHeadingBox">
            <div className="homeBlogGridHeading">
              <span>
                My Digital Garden{" "}
                <span className={"wgrdn"}>
                  <InternalLink
                    link={"/2020/06/thinking-of-blog-as-digital-garden/"}
                    title={"Thinking of this blog as a Digital Garden"}
                  >
                    What is this?
                  </InternalLink>
                </span>
              </span>

              <div className={"homeBlogGridHeadingLine"} />
            </div>

            <div className="homeBlogArchivesLink">
              <InternalLink link={"/blogs"} title={"Explore All Blogs"}>
                <div className="homeBlogArchivesButton">
                  <i className={"fa fa-folder-o"} /> Archives
                </div>
              </InternalLink>
            </div>
          </div>

          <div className="homeBlogBoxesCntnr">
            {blogs.map((blog, id) => (
              <BlogPostBox blog={blog} id={id} />
            ))}
          </div>
        </div>

        <div className="seeMoreBlogsBtn">
          <div className="homeBlogArchivesLink">
            <InternalLink link={"/blogs"} title={"Explore Blogs by Categories"}>
              <div className="homeBlogArchivesButton">
                <i className={"fa fa-folder-o"} /> See All Blog Posts (
                {this.props.data.allMdx.totalCount})
              </div>
            </InternalLink>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Index;

export const pageQuery = graphql`
  query IndexQuery {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }, limit: 12) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          title
          description
          date(formatString: "MMMM Do, YYYY")
          mainTag
          featuredImage {
            childImageSharp {
              fixed(width: 330, quality: 90) {
                ...GatsbyImageSharpFixed_withWebp
              }
            }
          }
        }
      }
      totalCount
    }
  }
`;

function getAge() {
  const dob = new Date(2001, 4, 8);
  const diff_ms = Date.now() - dob.getTime();
  const age_dt = new Date(diff_ms);

  console.log("calculating age");
  return Math.abs(age_dt.getUTCFullYear() - 1970);
}
