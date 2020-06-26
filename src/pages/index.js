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
    allMarkdownRemark {
      nodes {
        frontmatter {
          title
          authors {
            name
            email
          }
        }
      }
    }
    allAuthor {
      nodes {
        name
        email
        posts {
          frontmatter {
            title
          }
        }
      }
    }
  }
`
