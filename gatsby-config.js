const config = require('./src/siteConfig')

const { createProxyMiddleware } = require("http-proxy-middleware") //v1.x.x
// Use implicit require for v0.x.x of 'http-proxy-middleware'
// const proxy = require('http-proxy-middleware')
// be sure to replace 'createProxyMiddleware' with 'proxy' where applicable

module.exports = {
  // for avoiding CORS while developing Netlify Functions locally
  // read more: https://www.gatsbyjs.org/docs/api-proxy/#advanced-proxying
  developMiddleware: app => {
    app.use(
      "/.netlify/functions/",
      createProxyMiddleware({
        target: "http://localhost:9000",
        pathRewrite: {
          "/.netlify/functions/": "",
        },
      })
    )
  },
  siteMetadata: {
    title: `Raj Rajhans`,
    author: {
      name: `Raj Rajhans`,
      summary: `Raj Rajhans - Blog & Portfolio. Raj Rajhans is a web developer studying computer engineering. This blog reflects Raj's ideas, projects and learnings. `,
    },
    description: `Raj Rajhans - Blog & Portfolio. Raj Rajhans is a web developer studying computer engineering. This blog reflects Raj's ideas, projects and learnings. `,
    keywords:"Raj Rajhans, Raj, Rajhans, rajrajhans, rajrajhans blog",
    siteUrl: `https://rajrajhans.com/`,
    baseUrl: `https://rajrajhans.com`,
    logo: 'https://rajrajhans.com/rajrajhans_assets/logo-new.png',
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
              maxWidth: 1200,
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
        trackingId: `UA-121750899-1`,
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
    `gatsby-plugin-preact`,
    'gatsby-plugin-robots-txt',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/data`
      }
    }
  ],
}
