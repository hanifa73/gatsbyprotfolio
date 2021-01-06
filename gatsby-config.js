/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "hanifaakki Portfolio",
    description: "This is hanifaDev Portfolio Site",
    author: "@hanifadev",
    twitterUsername: "@NaHanifa",
    image: "/twitter-img1.png",
    siteUrl: "https://hanifa-portfolio.netlify.app",
    
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000, // Default to 100
        //   contentTypes : `jobs`, `projects`, `blogs`,
        //   
        //  ONLY ADD TO ARRAY IF YOU HAVE DATA IN STRAPI !!!!
        contentTypes: [`Jobs`,`Projects`, `blogs`],
       
        singleTypes: [`about`],
      },
    },
  //   {
  //     resolve: `gatsby-plugin-prefetch-google-fonts`,
  //     options: {
  //       fonts: [
  //         {
  //           family: `Roboto`,
  //           variants: [`400`, `700`],
  //         },
  //         {
  //           family: `Open Sans`,
  //         },
  //       ],
  //     },
  //   },
   ],
}
