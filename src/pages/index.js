import React from 'react'
import { graphql } from 'gatsby'

const HomePage = ({ data }) => (
  <main>
    <pre>{JSON.stringify(data, null, 2)}</pre>
  </main>
)

export default HomePage

export const query = graphql`
  query HomePageQuery {
    allPost {
      nodes {
        id
        title
        body
        authors {
          id
          name
          email
        }
        tags {
          id
          label
          description
        }
      }
    }
    allAuthor {
      nodes {
        id
        name
        email
      }
    }
    allTag {
      nodes {
        id
        label
        description
        posts {
          id
          title
          body
        }
      }
    }
  }
`
