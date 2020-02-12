module.exports = {
  siteMetadata: {
    title: `Open Up Podcast`,
    description: `The show that's "Making Mental Health Mainstream" by sharing stories of struggle, how it was overcome and the lessons our guests have taken away from it all. We delve into a wide range of topics, from the heavy ones like suicide and sexual abuse, to the more prevalent issues like anxiety, depression, body image and not feeling enough.`,
    author: `Lachlan Samuel`,
    twitter: ``,
    instagram: `https://www.instagram.com/openupgroup/`,
    facebook: `https://www.facebook.com/openuppodcast/?utm_source=podnews.net&utm_medium=web&utm_campaign=podcast-page`,
    youtube: `https://www.youtube.com/channel/UCcTovdKChwndCNwGeXDHxGw?view_as=subscriber`,
    apple: `https://podcasts.apple.com/podcast/id1359096106?ct=podlink&mt=2`,
    stitcher: ``,
    google: `https://podcasts.google.com/?feed=aHR0cDovL29wZW51cHBvZGNhc3QubGlic3luLmNvbS9yc3M=`,
    pocket: `https://pca.st/itunes/1359096106`,
    spotify: `https://open.spotify.com/show/7m4z7MgzinHhGf4r5tVpgz`,
    overcast: `https://overcast.fm/itunes1359096106`,
    castbox: `https://castbox.fm/vic/1359096106`,
    castro: `https://castro.fm/itunes/1359096106`,
    podbean: ``,
    beaker: ``
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        // icon: `https://pbcdn1.podbean.com/imglogo/image-logo/2144795/26850174_531238480575311_1377019303222901017_o_1_.png`, // This path is relative to the root of the site.
        icon: `src/images/logo.png` // This path is relative to the root of the site.
        // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-rss-feed`,
      options: {
        // url: `https://www.gatsbyjs.org/blog/rss.xml`,
        // url: `https://boysinthecave.com/feed/podcast/`,
        // url: `http://boysinthecave.libsyn.com/rss`,
        url: `http://openuppodcast.libsyn.com/rss`,
        name: `GatsbyBlog`,
        // Optional
        // Read parser document: https://github.com/bobby-brennan/rss-parser#readme
        parserOption: {
          customFields: {
            channel: ["title", "image"]
            // item: ["itunes:summary"],
            // item: ["itunes:image", "img"],
          }
        }
      }
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require(`tailwindcss`)]
      }
    }
  ]
};
