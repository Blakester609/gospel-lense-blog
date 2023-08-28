import * as React from "react"
import Layout from '../components/layout'
import { Link, useStaticQuery, graphql } from "gatsby"
import Seo from '../components/seo'
import templeImage from '../images/concepcion-chile-temple-273-main.jpg'

const IndexPage = () => {
  const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    subtitle
                    }
                }
            }
      `)

  const headerData = {
    title: data.site.siteMetadata.title,
    subtitle: data.site.siteMetadata.subtitle,
    backgroundImage: templeImage
  }

  return (
    <Layout pageTitle="" headerData={headerData}>
      <h4>Welcome! Check out my <Link to="/blog" style={{color: "#4d94d5", textDecoration: 'underline'}}>blog posts</Link> </h4>
      <p>Or, learn more about me by going to the <Link to="/about" style={{color: "#4d94d5", textDecoration: 'underline'}}>about page</Link></p>
    </Layout>
  )
}

export const Head = () => <Seo title="Home Page"/>

export default IndexPage