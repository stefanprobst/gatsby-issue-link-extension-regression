exports.createSchemaCustomization = ({ actions }) => {
  actions.createTypes(`
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
    }

    type Frontmatter {
      title: String!
      authors: [Author!]! @link(by: "email")
    }

    type Author implements Node @dontInfer {
      name: String!
      email: String!
      posts: [MarkdownRemark] @link(by: "frontmatter.authors.email", from: "email")
    }
  `)
}
