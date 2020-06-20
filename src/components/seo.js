import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import Pic from "./../../content/assets/gatsby-icon.png"

const SEO = ({ post }) => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      site {
        siteMetadata {
          title
          description
          baseUrl
        }
      }
    }
  `);
  console.log("RAXX", post!==undefined)
  const defaults = data.site.siteMetadata;

  if (defaults.baseUrl === '' && typeof window !== 'undefined') {
    defaults.baseUrl = window.location.origin;
  }

  if (defaults.baseUrl === '') {
    console.error('Please set a baseUrl in your site metadata!');
    return null;
  }

    const title = (post!==undefined ? post.title : defaults.title);
    const description = post!==undefined ? post.description : defaults.description;
    const url = new URL(post!==undefined ? post.description : '', defaults.baseUrl);
    const image = post!==undefined ? post.image : "https://rajrajhans.com/rajrajhans_assets/rajrajhans-logo.png";

  return (
    <Helmet>
      <title>{title}</title>
      <link rel="canonical" href={url} />
      <meta name="description" content={description} />
      {image && <meta name="image" content={image} />}

      <meta property="og:url" content={"https://rajrajhans.com/"} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={image} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={"@_rajrajhans"} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}
    </Helmet>
  );
};

export default SEO;