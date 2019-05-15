const path = require(`path`)

module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/styles/typography`
      }
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
        trackingId: "UA-136908250-1",
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: "InnoTact Software AB",
        short_name: "InnoTact",
        start_url: '/',
        display: 'standalone',
        icon: 'src/img/favicon512.png',
      },
    },
    `gatsby-transformer-sharp`, `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`
  ]
}
