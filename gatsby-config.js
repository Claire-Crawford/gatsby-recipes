/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
      spaceId: `oc5rrxututoq`,
      accessToken: `zCwwlU_bI8f7hM88oB1PPpDWz_PI_4Ta56IkBKqjY1w`,
      },
    },
    `gatsby-transformer-sharp`, 
    `gatsby-plugin-sharp`,
  ],
}
