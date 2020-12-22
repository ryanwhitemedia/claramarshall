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
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svgs/, // See below to configure properly
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "@mkitio/gatsby-theme-password-protect",
      options: {
        password: process.env.PROJECTS_PASSWORD, // delete or `undefined` to disable password protection
        partialMatching: true,
        pagePaths: ["/project", "/projects"],
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
