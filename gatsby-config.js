require("dotenv").config({
  path: ".env",
})

module.exports = {
  siteMetadata: {
    title: `Clara Marshall`,
    description: `Design portfolio.`,
    author: `@ryanwhitemedia`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-wordpress-experimental`,
      options: {
        url: process.env.API_URL,
        schema: {
          timeout: 60000,
          perPage: 300,
        },
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svgs/,
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-smoothscroll`,
    {
      resolve: "@mkitio/gatsby-theme-password-protect",
      options: {
        password: process.env.PROJECTS_PASSWORD,
        pagePaths: ["/projects", "/projects/"],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `clara-marshall`,
        short_name: `claramarshall`,
        start_url: `/`,
        background_color: `#FBF4EF`,
        theme_color: `#FBF4EF`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
