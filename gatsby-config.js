module.exports = {
  siteMetadata: {
    title: `Gatsby MapLibre Reise Blog`,
    description: ``,
    author: `Astrid Günther`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
