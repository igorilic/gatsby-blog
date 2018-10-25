module.exports = {
  siteMetadata: {
    title: 'New Blog',
    description: 'The New Blog',
    author: `Igor Ilić`
  },
  plugins: [
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      }
    }
  ]
}