const camelCase = require('lodash.camelcase')

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: 'src/data',
      },
    },
    {
      resolve: 'gatsby-transformer-json',
      options: {
        typeName: ({ node }) =>
          node.name.charAt(0).toUpperCase() + camelCase(node.name.slice(1)),
      },
    },
  ],
}
