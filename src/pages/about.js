import React, { Component } from "react"
import Layout from "../components/layout"
import HerosectionPage from "../components/herosectionPage"
import "../styles/about.scss"
import {AboutSVG} from "../static/svgs"

class About extends Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <HerosectionPage title={"About"} subtitle={"some gay shit"} svg={<AboutSVG/>}/>

        <div className={"content-container"}>

          <div className="aboutPageContainer">
            <div className="aboutRaj">
              <div className="aboutRajText">
                <div className="aboutRajTextHeading">
                  About Raj
                </div>

                <div className="aboutRajTextContent">
                  About Raj Text Content
                </div>
              </div>

              <div className="aboutRajPhoto">
                About Raj Photo Here
              </div>
            </div>

            <div className="aboutBlog">
              <div className="aboutBlogPhoto">
                About blog photo here
              </div>

              <div className="aboutBlogText">
                <div className="aboutBlogTextHeading">
                  About the Blog
                </div>

                <div className="aboutBlogTextContent">
                  About Blog Text Content
                </div>
              </div>
            </div>
          </div>

        </div>
      </Layout>
    )
  }
}

export default About