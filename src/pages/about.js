import React, { Component } from "react";
import Layout from "../components/layout";
import HerosectionPage from "../components/herosectionPage";
import "../styles/about.scss";
import { AboutSVG, AboutBlogSVG } from "../static/svgs";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import SEO from "../components/seo";

class About extends Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <SEO
          title={"About"}
          description={
            "About Raj Rajhans. Raj Rajhans is a web developer studying computer engineering. This blog reflects Raj's ideas, projects and learnings."
          }
          url={"/about"}
        />
        <HerosectionPage title={"About"} svg={<AboutSVG />} />

        <div className={"content-container"}>
          <div className="aboutPageContainer">
            <div className="aboutRaj">
              <div className="aboutRajText">
                <div className="aboutRajTextHeading">
                  <h2>About Raj</h2>
                  <div className={"aboutBorderBottom"} />
                </div>

                <div className="aboutRajTextContent">
                  <p>
                    Hey there, I'm Raj, a fullstack software developer. I enjoy
                    developing well-designed, responsive, and functional web
                    applications.
                  </p>

                  <p>
                    I am proficient in JavaScript, TypeScript and the React
                    ecosystem. I also have experience in developing REST API
                    backends using Flask (Python), and Spring Boot (Java). I can
                    leverage the power of AWS and Azure Cloud Services to deploy
                    web applications that can scale. I'm always up for learning
                    a new technology and exploring how it solves common
                    problems.
                  </p>

                  <p>
                    I'm currently working as an Open Source Fellow with the AWS
                    Amplify CLI Team as part of the MLH Fellowship (Spring '21
                    Batch).
                  </p>
                </div>
              </div>

              <div className="aboutRajPhoto">
                <Img
                  fluid={this.props.data.allFile.nodes[0].childImageSharp.fluid}
                  alt={"Raj Rajhans"}
                />
              </div>
            </div>

            <div className="aboutBlog">
              <div className="aboutBlogPhoto">
                <AboutBlogSVG />
              </div>

              <div className="aboutBlogText">
                <div className="aboutBlogTextHeading">
                  <h2>About the Blog</h2>
                  <div className={"aboutBorderBottom"} />
                </div>

                <div className="aboutBlogTextContent">
                  <p>
                    Oppenheimer once said, “The best way to learn is to teach”.
                  </p>
                  <p>
                    Blogging is a way to document one’s learnings. If you
                    haven’t, go watch{" "}
                    <a
                      href={"https://www.youtube.com/watch?v=RVKofRN1dyI"}
                      target={"_blank"}
                      rel={"noopener noreferrer"}
                      title={"GaryVee's Youtube video"}
                    >
                      {" "}
                      Gary Vaynerchuk’s Document, Don’t Create video.
                    </a>
                  </p>

                  <p>
                    Developers are creators, and documenting the creating
                    process only improves the developer’s skills. Writing about
                    something solidifies the learning process. It’s easy to say
                    you’ve done some reading on X, but if you have a blog post
                    and a GitHub project to back up, it really makes it more
                    believable. Not just that, it has the potential to help
                    someone. A small contribution is always better than no
                    contribution.
                  </p>

                  <p>
                    <a href={"/2020/06/thinking-of-blog-as-digital-garden/"}>
                      I like to think of my blog as more of a digital garden,
                      rather than a traditional blog.
                    </a>{" "}
                    The aim is to document the projects, ideas, and learnings.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default About;

export const query = graphql`
  query AboutImageQuery {
    allFile(filter: { name: { eq: "raj-profile-pic-1" } }) {
      nodes {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`;
