import React, { Component } from "react"
import { ContactSVG} from "../static/svgs"
import Layout from "../components/layout"
import HerosectionPage from "../components/herosectionPage"
import "../styles/contact.scss"
import SEO from "../components/seo"
import ContactForm from "../components/contactForm"

class Contact extends Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <SEO
          title={"Contact Me"}
          description={"Contact Raj Rajhans. Raj Rajhans is a web developer studying computer engineering. This blog reflects Raj's ideas, projects and learnings."}
          url={"/contact"}
        />
        <HerosectionPage title={"Contact Me"} svg={<ContactSVG/>} />

        <div className="content-container">
          <div className="contactCntnr">
            <div className="contactFormCntnr">
              <ContactForm/>
            </div>

            <div className="contactDetailsCntnr">
              <div className="contactDetails">
                <h2>Connect </h2>
                <ul>

                  <a href={"mailto:me@rajrajhans.com"} target={"_blank"} rel={"noopener noreferrer"}>
                    <li>
                    <span className={"contactIcon"}>
                      <i className="fa fa-2x fa-envelope"/>
                    </span>
                      me@rajrajhans.com
                    </li>
                  </a>

                  <a href={"https://twitter.com/_rajrajhans"} target={"_blank"} rel={"noopener noreferrer"}>
                    <li>
                    <span className={"contactIcon"}>
                      <i className="fa fa-2x fa-twitter"/>
                    </span>
                      @_rajrajhans
                    </li>
                  </a>

                  <a href={"https://www.instagram.com/_rajrajhans/"} target={"_blank"} rel={"noopener noreferrer"}>
                    <li>
                  <span className={"contactIcon"}>
                    <i className="fa fa-2x fa-instagram"/>
                  </span>
                      @_rajrajhans
                    </li>
                  </a>

                  <a href={"https://www.linkedin.com/in/rajrajhans/"} target={"_blank"} rel={"noopener noreferrer"}>
                    <li style={{"marginBottom":"15px"}}>
                  <span className={"contactIcon"}>
                    <i className="fa fa-2x fa-linkedin"/>
                  </span>
                      @rajrajhans
                    </li>
                  </a>


                </ul>

              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Contact