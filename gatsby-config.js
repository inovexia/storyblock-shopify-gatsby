const path = require("path");

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: `https://inovexia-store.myshopify.com/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-storyblok',
      options: {
        accessToken: 'nvyV3664MUK7IKQ7pNYzQAtt',
        version: 'draft',
        localAssets: true, // Optional parameter to download the images to use with Gatsby Image Plugin
        languages: ['de', 'at'] // Optional parameter. Omission will retrieve all languages by default.
      }
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        // This type will contain remote schema Query type
        typeName: 'ShopifyStore',
        // This is field under which it's accessible
        fieldName: 'store',
        // Url to query from
        url: `https://inovexia-store.myshopify.com/api/2022-01/graphql.json`,
        headers: {
          // Learn about environment variables: https://gatsby.dev/env-vars
          'X-Shopify-Storefront-Access-Token': `96866a02b982dd23ea5cb1ed8fb33c99`,
        },
        // refetchInterval: 60,
      },
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        // This type will contain remote schema Query type
        typeName: 'ShopifyStoreAdmin',
        // This is field under which it's accessible
        fieldName: 'storeAdmin',
        // Url to query from
        url: `https://inovexia-store.myshopify.com/admin/api/2022-01/graphql.json`,
        headers: {
          // Learn about environment variables: https://gatsby.dev/env-vars
          'X-Shopify-Access-Token': `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`,
        },
        // refetchInterval: 60,
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require('sass'),
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        '~': path.join(__dirname, 'src/'),
      },
    },
    `gatsby-plugin-fontawesome-css`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
