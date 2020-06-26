import React from "react"
import { graphql } from "gatsby"
import "../styles/404.scss"
import Layout from "../components/layout"
import SEO from "../components/seo"
import InternalLink from "../components/utilComponents/internalLink"

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="404: Not Found" />
      <div id="error404container">

        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
             x="0px" y="0px" viewBox="0 0 786.94 294.29"
             xmlSpace="preserve">
          <path className="error404line error404anim" d="M151.13,226.53H26.2v-56.4L151.13,21.64h59.77v151.69h30.98v53.2h-30.98v46.13h-59.77V226.53z M151.13,173.33V95.65
      l-66.01,77.67H151.13z"/>
              <path className="error404line error404anim" d="M669.99,226.53H545.07v-56.4L669.99,21.64h59.77v151.69h30.98v53.2h-30.98v46.13h-59.77V226.53z M669.99,173.33V95.65
      l-66.01,77.67H669.99z"/>
              <path className="error404line error404anim" d="M393.47,80.81c36.58,0,66.34,29.76,66.34,66.34c0,36.58-29.76,66.34-66.34,66.34s-66.34-29.76-66.34-66.34
      C327.13,110.57,356.89,80.81,393.47,80.81 M393.47,21.81c-69.22,0-125.34,56.11-125.34,125.34s56.11,125.34,125.34,125.34
      s125.34-56.11,125.34-125.34S462.69,21.81,393.47,21.81L393.47,21.81z"/>
        </svg>

        <div className="error404text pgnt404">
          Page Not Found!
        </div>

        <div className="error404text">
          <InternalLink link={"/"} title={"Go to the Home Page"}>Go to the Home Page</InternalLink>
        </div>

      </div>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
