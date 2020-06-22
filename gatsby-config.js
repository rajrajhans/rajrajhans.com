const config = require('./src/siteConfig')

module.exports = {
  siteMetadata: {
    title: `Raj Rajhans`,
    author: {
      name: `Raj Rajhans`,
      summary: `Raj Rajhans - Blog & Portfolio. Raj Rajhans is a web developer studying computer engineering. This blog reflects Raj's ideas, projects and learnings. `,
    },
    description: `Raj Rajhans - Blog & Portfolio. Raj Rajhans is a web developer studying computer engineering. This blog reflects Raj's ideas, projects and learnings. `,
    keywords:"Raj Rajhans, Raj, Rajhans, rajrajhans, rajrajhans blog",
    siteUrl: `https://rajrajhans.com/`,
    baseUrl: `https://rajrajhans.com/`,
    logo: 'https://rajrajhans.com/rajrajhans_assets/rajrajhans-logo.png',
    social: {
      twitter: `_rajrajhans`,
      instagram: `rajrajhans`,
    },
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: config.themeColor,
        showSpinner: false,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 500,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed-mdx`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Raj Rajhans`,
        short_name: `Raj Rajhans`,
        start_url: `/`,
        background_color: `ghostwhite`,
        theme_color: config.themeColor,
        display: `minimal-ui`,
        icon: `content/assets/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-dark-mode`,
    `gatsby-plugin-transition-link`,
    `gatsby-transformer-json`,
    `gatsby-plugin-sitemap`,
    'gatsby-plugin-robots-txt',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/data`
      }
    }
  ],
}
