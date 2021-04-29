module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-styled-components`,
    },
    `babel-plugin-styled-components`,
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: `http://staging.wildishandco.co.uk/graphql`,
        verbose: true,
        develop: {
          hardCacheMediaFiles: true,
        },
        production: {
          hardCacheMediaFiles: true,
          allow404Images: true,
        },
        debug: {
          graphql: {
            writeQueriesToDisk: true,
          },
        },
      },
    },
    {
      resolve: "@sentry/gatsby",
      options: {
        dsn:
          "https://8d6e9cdf7c8f4f308d2facc2d1a7be93@o593193.ingest.sentry.io/5741559",
        sampleRate: 0.7,
      },
    },
  ],
};
