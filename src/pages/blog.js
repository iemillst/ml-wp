import React, { Component } from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'

class BlogPage extends Component {
  render() {
    const data = this.props.data

    return (
      <Layout>
        <h1>Posts</h1>
        {data.allWordpressPost.edges.map(({ node }) => (
          <div key={node.slug}>
            <Link to={`/blog/${node.slug}`} css={{ textDecoration: `none` }}>
              <h3 dangerouslySetInnerHTML={{ __html: node.title }} />
            </Link>
            <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            <div dangerouslySetInnerHTML={{ __html: node.date }} />
          </div>
        ))}
      </Layout>
    )
  }
}

export default BlogPage

export const pageQuery = graphql`
  query {
    allWordpressPost {
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
`
