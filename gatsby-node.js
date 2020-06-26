exports.createSchemaCustomization = ({ actions }) => {
  actions.createTypes(`
    type Author implements Node @dontInfer {
      id: ID!
      name: String!
      email: String!
      posts: [Post!]! @link(from: "email", by: "authors.email")
    }

    type Post implements Node @dontInfer {
      id: ID!
      title: String!
      body: String!
      authors: [Author!]! @link(by: "email")
      tags: [Tag!]! @link
    }

    type Tag implements Node @dontInfer {
      id: ID!
      label: String!
      description: String!
      posts: [Post!]! @link(from: "id", by: "tags.id")
    }
  `)
}
