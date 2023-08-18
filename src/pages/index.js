import * as React from "react"
import Layout from '../components/layout'
import { useStaticQuery, graphql } from "gatsby"
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
    <Layout pageTitle="Home Page" headerData={headerData}>
        <h1>The Gospel Lense</h1>
        <p>I'm making this by following the Gatsby Tutorial.</p>
    </Layout>
  )
}

export const Head = () => <Seo title="Home Page"/>

export default IndexPage