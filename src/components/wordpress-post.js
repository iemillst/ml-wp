import React, { Component } from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
//import PostIcons from '../components/PostIcons'
//import Img from 'gatsby-image'
import Layout from './layout'

//import { rhythm } from '../utils/typography'

class PostTemplate extends Component {
  render() {
    const post = this.props.data.wordpressPost

    return (
      <Layout>
        <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
        <h3 dangerouslySetInnerHTML={{ __html: post.date }} />
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </Layout>
    )
  }
}

PostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default PostTemplate

export const pageQuery = graphql`
  query($id: String) {
    wordpressPost(id: { eq: $id }) {
      slug
      id
      date
      title
      content
    }
  }
`
