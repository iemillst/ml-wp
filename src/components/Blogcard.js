import React from 'react'
import { StaticQuery, Link, graphql } from 'gatsby'

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allWordpressPost(limit: 3) {
          edges {
            node {
              title
              excerpt
              slug
              date(formatString: "MMMM DD, YYYY")
            }
          }
        }
      }
    `}
    render={data => (
      <div>
        <h1>Posts</h1>
        {data.allWordpressPost.edges.map(({ node }) => (
          <div key={node.slug}>
            <Link to={node.slug} css={{ textDecoration: `none` }}>
              <h3 dangerouslySetInnerHTML={{ __html: node.title }} />
            </Link>
            <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            <div dangerouslySetInnerHTML={{ __html: node.date }} />
          </div>
        ))}
      </div>
    )}
  />
)
