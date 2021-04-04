const path = require(`path`)

module.exports = {
  // siteMetadata: {
  //   title: "Severus Snape",
  //   titleTemplate: "%s – InnoTact", // 'InnoTact: Augmented Reality (AR) Utvecklare, Göteborg'",
  //   description:
  //     "Sweden's leading Augmented Reality Company - We build ",
  //   url: "https://www.innotactsoftware.com",
  // },
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/styles/typography`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: path.join(__dirname, `src`, `img`),
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-106855092-4",
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "InnoTact Software AB",
        short_name: "InnoTact",
        start_url: "/",
        display: "standalone",
        icon: "src/img/favicon-32x32.png",
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
  ],
}
