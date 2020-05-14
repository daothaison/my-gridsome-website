// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const nodeExternals = require('webpack-node-externals')

module.exports = {
  siteName: "My Gridsome Website",
  siteUrl: "https://daothaison.me",
  titleTemplate: '%s - daothaison.me',
  siteDescription: "Taaaadaaaaaaa",

  chainWebpack(config, { isServer }) {
    if (isServer) {
      config.externals(nodeExternals({
        whitelist: [
          /\.css$/,
          /\?vue&type=style/,
        ]
      }))
    }
  },


  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "article/_posts/**/*.md",
        typeName: "Article",
        route: "/:slug-:id",
        remark: {
          autolinkHeadings: {
            content: {
              type: 'text',
              value: '# '
            }
          }
        }
      }
    },
  ],
  transformers: {
    //Add markdown support to all file-system sources
    remark: {
      externalLinksTarget: "_blank",
      externalLinksRel: ["nofollow", "noopener", "noreferrer"],
      anchorClassName: "fe fe-hash mr-1",
      plugins: ["@gridsome/remark-prismjs"]
    }
  }
};
