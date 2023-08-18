/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `The Gospel Lens`,
    subtitle: `A blog dedicated to seeing life experiences and current events through a perspective of beliefs of the Church of Jesus Christ of Latter-day Saints`
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`
      }
    },
    {
      resolve: "gatsby-plugin-mdx",
    },
    "gatsby-plugin-slug",
    "gatsby-transformer-sharp"
  ],
}
