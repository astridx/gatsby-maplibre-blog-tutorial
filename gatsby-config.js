module.exports = {
  siteMetadata: {
    title: `Gatsby MapLibre Reise Blog`,
    description: ``,
    author: `Astrid Günther`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      },
    },
    `gatsby-transformer-remark`,
  ],
}
