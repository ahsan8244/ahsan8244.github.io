module.exports = {
  siteMetadata: {
    siteUrl: "https://www.ahsansyed.dev",
    title: "Ahsan Syed",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "285336391",
      },
    },
    "gatsby-plugin-react-helmet",
    "@chakra-ui/gatsby-plugin"
  ],
};
