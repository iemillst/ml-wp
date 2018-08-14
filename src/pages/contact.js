import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Blogcard from '../components/Blogcard'

const ContactPage = () => (
  <Layout>
    <h1>Contact</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Contact.</p>
    <Link to="/page-2/">Go to page 2</Link>
    <Blogcard />
  </Layout>
)

export default ContactPage
