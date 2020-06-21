import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import Pic from "./../../content/assets/gatsby-icon.png"

const SEO = ({ title, description, keywords, url, image }) => {
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



  const defaults = data.site.siteMetadata;

  if (defaults.baseUrl === '' && typeof window !== 'undefined') {
    defaults.baseUrl = window.location.origin;
  }

  if (defaults.baseUrl === '') {
    console.error('Please set a baseUrl in your site metadata!');
    return null;
  }


  // const title = (post!==undefined ? post.title : defaults.title);
  // const description = post!==undefined ? post.description : defaults.description;
  // const keywords = post!==undefined ? post.keywords : defaults.keywords;
  // const url = new URL(post!==undefined ? post.description : '', defaults.baseUrl);
  // const image = post!==undefined ? post.image : "https://rajrajhans.com/rajrajhans_assets/rajrajhans-logo.png";
  const seoTitle = `${title} | Raj Rajhans`

  return (
    <Helmet>
      <title>{seoTitle}</title>
      <link rel="canonical" href={url} />
      <meta name="description" content={description} />
      <meta name="image" content={image} />
      <meta name="keywords" content={keywords}/>

      <meta property="og:url" content={"https://rajrajhans.com/"} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={seoTitle}/>
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={"@_rajrajhans"} />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

SEO.defaultProps = {
  title: "Blog",
  description:'Raj Rajhans - Blog & Portfolio. Raj Rajhans is a web developer studying computer engineering. This blog reflects Raj\'s ideas, projects and learnings. ',
  keywords:"Raj Rajhans, Raj, Rajhans, rajrajhans",
  url:`https://rajrajhans.com/`,
  image: "https://rajrajhans.com/rajrajhans_assets/rajrajhans-logo.png"
}

export default SEO;