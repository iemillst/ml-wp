import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <div className="hero" />

    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
    <span> </span>
    <Link to="/contact/">Go to contact</Link>
    <span> </span>
    <Link to="/about/">Go to about</Link>
  </Layout>
)

export default IndexPage
