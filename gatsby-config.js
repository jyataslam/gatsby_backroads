/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
    /* Your site config here */
    siteMetadata: {
        title: "Travel Well",
        description:
            "Say yes to adventure. Enjoy worldwide tours and discover what makes each destination unique.",
        author: "@jasonyata",
        twitterUsername: "@jyataslam",
        image: "/defaultBcg.jpeg",
        siteUrl: "https://travelwell-gatsby.netlify.app",
    },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images/`,
            },
        },
        {
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: process.env.CONTENTFUL_SPACE_ID,
                // Learn about environment variables: https://gatsby.dev/env-vars
                accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
            },
        },
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sass`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-transition-link`,
    ],
}
